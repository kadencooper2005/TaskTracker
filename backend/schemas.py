from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = None
    priority: Optional[str] = "Medium"

class TaskOut(BaseModel):
    id: int
    title: str
    description: Optional[str]
    completed: bool
    owner_id: int
    createdAt: datetime = Field(..., alias="created_at")
    priority: Optional[str] = "Medium"

    class Config:
        orm_mode = True  # enable ORM mode inside this class
        allow_population_by_field_name = True

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    completed: Optional[bool] = None
    priority: Optional[str] = None 



class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str
    role: str = "user"
