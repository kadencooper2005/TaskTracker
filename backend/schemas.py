from pydantic import BaseModel, EmailStr
from typing import Optional

class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = None

class TaskOut(BaseModel):
    id: int
    title: str
    description: Optional[str]
    completed: bool
    owner_id: int

class Config:
    orm_mode = True

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str
    role: str = "user"