# 1. Core and third-party imports
from fastapi import FastAPI, Depends, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler
from prometheus_fastapi_instrumentator import Instrumentator
import logging
import redis

# 2. Internal app modules
from rate_limit import limiter
from auth import router as auth_router, get_current_user
from database import engine
from models import Base, User
from routes import user, task

app = FastAPI()

router = APIRouter()

logger = logging.getLogger(__name__)



# Basic logging setup to stdout with INFO level
logging.basicConfig(
    filename="logs/app.log",  # Must match promtail path
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)


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

app.state.limiter = limiter

Base.metadata.create_all(bind=engine)

# Include your routers
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
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
