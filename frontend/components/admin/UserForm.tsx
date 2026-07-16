"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { createUser } from "@/services/user.service";

export default function UserForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    roleId: "",
  });

  const submit = async () => {
    try {
      await createUser(form);

      toast.success("User created successfully");
    } catch {
      toast.error("Failed creating user");
    }
  };

  return (
    <div
      className="
space-y-4
bg-white
p-6
rounded
shadow
"
    >
      <h2 className="text-xl font-bold">Create User</h2>

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
            roleId: e.target.value,
          })
        }
      >
        <option>Select Role</option>

        <option value="ADMIN">Admin</option>

        <option value="PROJECT_MANAGER">Project Manager</option>

        <option value="TEAM_MEMBER">Team Member</option>
      </select>

      <button
        onClick={submit}
        className="
bg-black
text-white
px-5
py-2
rounded
"
      >
        Create User
      </button>
    </div>
  );
}
