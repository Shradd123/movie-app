"use client";
import { useState } from "react";
import { useMovieContext } from "@/context/MovieContext";

export default function LoginPage() {
  const { loginUser } = useMovieContext();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      loginUser(username);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-4"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </div>
  );
}
