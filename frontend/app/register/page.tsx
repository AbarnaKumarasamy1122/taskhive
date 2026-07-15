"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";

export default function RegisterPage() {
  const router = useRouter();

  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",

    email: "",

    password: "",

    role: "TEAM_MEMBER",
  });

  const handleSubmit = async () => {
    await register(form);

    router.push("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-3 w-96">
        <h1 className="text-3xl font-bold">Create Account</h1>

        <input
          className="border p-2 w-full"
          placeholder="Name"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <select
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              role: e.target.value,
            })
          }
        >
          <option value="TEAM_MEMBER">Team Member</option>

          <option value="PROJECT_MANAGER">Project Manager</option>
        </select>

        <button
          className="bg-black text-white p-2 w-full"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
}
