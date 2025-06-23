"use client";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, CheckCircle2, Circle } from "lucide-react";

import { getTasks, createTask, deleteTask, updateTask } from "@/lib/api";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date; // internal camelCase usage
  priority: "low" | "medium" | "high";
}

// Define the type for the API response (snake_case from backend)
type TaskApiResponse = {
  id: string;
  title: string;
  description: string | null;
  completed: boolean;
  created_at: string;
  priority?: "low" | "medium" | "high";
};

export default function TasksPage() {
  const [token, setToken] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium" as "low" | "medium" | "high",
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (!storedToken) {
      window.location.href = "/login";
    } else {
      setToken(storedToken);
    }
  }, []);

  // Fetch tasks when token is available
  useEffect(() => {
    if (!token) return;
    const fetchTasks = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getTasks(token);
        setTasks(
          data.map((task: TaskApiResponse) => ({
            ...task,
            createdAt: new Date(task.created_at), // map snake_case -> camelCase with Date object
            priority: task.priority ?? "medium",
          }))
        );
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Failed to load tasks");
        } else {
          setError("Failed to load tasks");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, [token]);

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.title.trim() || !token) return;

    try {
      const createdTask = await createTask(newTask, token);
      setTasks((prev) => [
        {
          ...createdTask,
          createdAt: new Date(createdTask.created_at), // same mapping here
          priority: createdTask.priority ?? "medium",
        },
        ...prev,
      ]);
      setNewTask({ title: "", description: "", priority: "medium" });
      setShowAddForm(false);
    } catch (error) {
      console.error(error);
      alert("Failed to create task");
    }
  };

  async function handleDeleteTask(taskId: string) {
    if (!token) return;
    if (!confirm("Are you sure you want to delete this task?")) return;
    try {
      await deleteTask(taskId);
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message || "Failed to delete task");
      } else {
        alert("Failed to delete task");
      }
    }
  }

  async function handleToggleComplete(taskId: string) {
    if (!token) return;
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    try {
      const updated = await updateTask(
        taskId,
        {
          completed: !task.completed,
          priority: task.priority,
        },
        token
      );
      setTasks((prev) =>
        prev.map((t) =>
          t.id === taskId
            ? {
                ...t,
                ...updated,
                createdAt: new Date(updated.created_at), // map here too
                priority: updated.priority ?? "medium",
              }
            : t
        )
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message || "Failed to update task");
      } else {
        alert("Failed to update task");
      }
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-600 hover:bg-red-700";
      case "medium":
        return "bg-yellow-600 hover:bg-yellow-700";
      case "low":
        return "bg-green-600 hover:bg-green-700";
      default:
        return "bg-gray-600 hover:bg-gray-700";
    }
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      <header className="w-full px-6 py-4 border-b border-purple-800/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-white font-bold text-2xl">TaskTracker</h1>
          <div className="flex items-center gap-4">
            <div className="text-purple-200 text-sm">
              {completedTasks} of {totalTasks} tasks completed
            </div>
            <Button
              variant="outline"
              className="bg-transparent border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black"
              onClick={() => {
                localStorage.removeItem("access_token");
                window.location.href = "/login";
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Your Tasks</h1>
          <p className="text-purple-200">
            Stay organized and track your progress
          </p>
        </div>

        <div className="mb-6">
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Task
          </Button>
        </div>

        {showAddForm && (
          <Card className="bg-black/40 border-purple-800/50 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="text-white">Create New Task</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateTask} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">
                    Task Title
                  </Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter task title"
                    value={newTask.title}
                    onChange={(e) =>
                      setNewTask({ ...newTask, title: e.target.value })
                    }
                    required
                    className="bg-black/50 border-purple-600/50 text-white placeholder:text-gray-400 focus:border-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">
                    Description (Optional)
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Enter task description"
                    value={newTask.description}
                    onChange={(e) =>
                      setNewTask({ ...newTask, description: e.target.value })
                    }
                    className="bg-black/50 border-purple-600/50 text-white placeholder:text-gray-400 focus:border-purple-400"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority" className="text-white">
                    Priority
                  </Label>
                  <select
                    id="priority"
                    value={newTask.priority}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        priority: e.target.value as "low" | "medium" | "high",
                      })
                    }
                    className="w-full px-3 py-2 bg-black/50 border border-purple-600/50 text-white rounded-md focus:border-purple-400 focus:outline-none"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <Button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Create Task
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                    className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Tasks List */}
        <div className="space-y-4">
          {loading && <p className="text-white">Loading tasks...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {!loading && tasks.length === 0 && (
            <Card className="bg-black/40 border-purple-800/50 backdrop-blur-sm">
              <CardContent className="py-12 text-center">
                <p className="text-gray-400 text-lg">
                  No tasks yet. Create your first task to get started!
                </p>
              </CardContent>
            </Card>
          )}
          {!loading &&
            tasks.map((task) => (
              <Card
                key={task.id}
                className={`bg-black/40 border-purple-800/50 backdrop-blur-sm transition-all hover:bg-black/50 ${
                  task.completed ? "opacity-75" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <button
                        onClick={() => handleToggleComplete(task.id)}
                        className="mt-1 text-purple-400 hover:text-purple-300"
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <Circle className="w-5 h-5" />
                        )}
                      </button>
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-semibold mb-2 ${
                            task.completed
                              ? "text-gray-400 line-through"
                              : "text-white"
                          }`}
                        >
                          {task.title}
                        </h3>
                        {task.description && (
                          <p
                            className={`mb-3 ${
                              task.completed ? "text-gray-500" : "text-gray-300"
                            }`}
                          >
                            {task.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2">
                          <Badge
                            className={`${getPriorityColor(
                              task.priority ?? "medium"
                            )} text-white`}
                          >
                            {(task.priority ?? "medium")
                              .charAt(0)
                              .toUpperCase() +
                              (task.priority ?? "medium").slice(1)}
                          </Badge>
                          <span className="text-sm text-gray-400">
                            Created {task.createdAt.toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleDeleteTask(task.id)}
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-red-600/50 text-red-400 hover:bg-red-600 hover:text-white ml-4"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
