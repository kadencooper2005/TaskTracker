from fastapi import FastAPI, Depends, APIRouter
from auth import router as auth_router, get_current_user, require_role
from database import engine
from models import Base, User
from routes import user, task
from prometheus_fastapi_instrumentator import Instrumentator
import logging
import sys
from dotenv import load_dotenv
load_dotenv()


# Basic logging setup to stdout with INFO level
logging.basicConfig(
    filename="logs/app.log",  # Must match promtail path
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

logger = logging.getLogger(__name__)

router = APIRouter()

@router.get("/")
def root():
    logger.info("Root endpoint hit")
    return {"message": "Task Tracker System is running"}

@router.get("/me")
def read_current_user(current_user: User = Depends(get_current_user)):
    logger.info(f"User info requested: {current_user.username}")
    return {
        "username": current_user.username,
        "email": current_user.email
    }

@router.get("/admin")
def admin_dashboard(current_user: User = Depends(require_role("admin"))):
    logger.info(f"Admin dashboard accessed by: {current_user.username}")
    return {"message": f"Welcome, {current_user.username}. This is the admin dashboard."}

app = FastAPI()

Base.metadata.create_all(bind=engine)

# Include your routers
app.include_router(auth_router, prefix="/auth")
app.include_router(user.router)
app.include_router(router)
app.include_router(task.router)
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],  # or 3001, depending on Next.js dev port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Add Prometheus metrics endpoint /metrics
instrumentator = Instrumentator().instrument(app)
instrumentator.expose(app)
logging.info("Startup complete. Metrics exposed")
