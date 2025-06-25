from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from database import get_db
from models import Task, User
from schemas import TaskCreate, TaskOut, TaskUpdate
from auth import get_current_user
from typing import List
from rate_limit import limiter
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/tasks", tags=["Tasks"])

## GET route to landing page w/ rate limiting
@router.get("/", response_model=List[TaskOut])
@limiter.limit("30/minute")  
def get_tasks(request: Request, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return db.query(Task).filter(Task.owner_id == current_user.id).all()

## POST operation for task w/ rate limiting 
@router.post("/", response_model=TaskOut)
@limiter.limit("10/minute")
def create_task(request: Request, task: TaskCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    new_task = Task(**task.model_dump(), owner_id=current_user.id)
    logger.info(f"Task '{new_task.title}' created by {current_user.username}")
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task

## DELETE operation for task w/ rate limiting
@router.delete("/{task_id}")
@limiter.limit("20/minute")
def delete_task(request: Request, task_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    task = db.query(Task).filter(Task.id == task_id, Task.owner_id == current_user.id).first()
    logger.info(f"Task ID {task_id} deleted by {current_user.username}")
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    db.delete(task)
    db.commit()
    return {"message": "Task deleted"}

## PUT operation for task w/ rate limiting 
@router.put("/{task_id}", response_model=TaskOut)
@limiter.limit("20/minute")
def update_task(
    request: Request,
    task_id: int,
    updated: TaskUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    task = db.query(Task).filter(Task.id == task_id, Task.owner_id == current_user.id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    
    for attr, value in updated.model_dump(exclude_unset=True).items():
        setattr(task, attr, value)

    db.commit()
    db.refresh(task)
    return task
