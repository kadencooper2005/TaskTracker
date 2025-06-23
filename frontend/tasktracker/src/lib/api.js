const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
// 1. Register a new user
export async function registerUser(form) {
    const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });
    if (!res.ok) {
        const errorText = await res.text();
        console.error("Registration error response:", errorText);
        throw new Error('Registration failed')
    }

    return res.json()
}

export async function loginUser({ username, password }) {
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded", // required
        },
        body: formData,
    });

    if (!res.ok) {
        const errorText = await res.text();
        console.error("Login error:", errorText);
        throw new Error("Login failed");
    }

    return res.json(); // expected to return { access_token: "...", token_type: "bearer" }
}


// lib/api.ts (or .js)

function getAuthHeader() {
    // You should store your JWT token in localStorage or cookies on login
    const token = localStorage.getItem('access_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
}
// Get all tasks for the current user
export async function getTasks(token) {
    const res = await fetch(`${API_BASE}/tasks/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!res.ok) throw new Error("Failed to fetch tasks");
    return res.json();
}

// Create a new task
export async function createTask(taskData, token) {
    const res = await fetch(`${API_BASE}/tasks/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(taskData),
    });
    if (!res.ok) throw new Error("Failed to create task");
    return res.json();
}

// Delete a task by id
export async function deleteTask(taskId) {
    const res = await fetch(`${API_BASE}/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
            ...getAuthHeader(),
        },
    });
    if (!res.ok) throw new Error('Failed to delete task');
    return res.json();
}
// Update task completion status
export async function updateTask(taskId, updates, token) {
    const res = await fetch(`${API_BASE}/tasks/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // ✅ include token here
        },
        body: JSON.stringify(updates),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.detail || "Failed to update task");
    }

    return await res.json();
}



