"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";

export default function LoginPage() {
  const router = useRouter();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);

      const user = JSON.parse(localStorage.getItem("user") || "{}");

      if (user.role === "ADMIN") router.push("/dashboard/admin");
      else if (user.role === "PROJECT_MANAGER")
        router.push("/dashboard/manager");
      else router.push("/dashboard/member");
    } catch (err: any) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 space-y-4">
        <h1 className="text-3xl font-bold">TaskHive Login</h1>

        <input
          className="border p-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          className="bg-black text-white p-2 w-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
