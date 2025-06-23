from fastapi import APIRouter, Depends, HTTPException
from auth import get_current_user
from models import User

router = APIRouter()

@router.get("/me")
def read_current_user(current_user: User = Depends(get_current_user)):
    return {
        "username": current_user.username,
        "email": current_user.email
    }


@router.get("/trigger-500")
def trigger_500():
    raise HTTPException(status_code=500, detail="This is a simulated 500 error")