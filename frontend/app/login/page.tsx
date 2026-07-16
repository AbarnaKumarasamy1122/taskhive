"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";

export default function LoginPage() {
  const router = useRouter();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const user = await login(email, password);

      const role = typeof user.role === "string" ? user.role : user.role.name;

      toast.success("Login successful");

      switch (role) {
        case "ADMIN":
          router.push("/dashboard/admin");

          break;

        case "PROJECT_MANAGER":
          router.push("/dashboard/manager");

          break;

        case "TEAM_MEMBER":
          router.push("/dashboard/member");

          break;

        default:
          router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
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
          disabled={loading}
          onClick={handleLogin}
          className="
        bg-black
        text-white
        w-full
        p-2
        rounded
        "
        >
          {loading ? "Logging..." : "Login"}
        </button>
      </div>
    </div>
  );
}
