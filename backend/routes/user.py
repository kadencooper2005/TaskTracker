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
