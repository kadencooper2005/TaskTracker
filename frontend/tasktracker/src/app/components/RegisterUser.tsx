"use client";

import { useState } from "react";
import { registerUser } from "@/lib/api";

export default function RegisterForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Registering...");
    try {
      await registerUser(form);
      setStatus("🎉 Registration successful!");
      setForm({ username: "", email: "", password: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Registration failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
      <button
        type="submit"
        className="w-full py-2 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold"
      >
        Register
      </button>
      <p className="text-sm text-purple-300 text-center">{status}</p>
    </form>
  );
}
