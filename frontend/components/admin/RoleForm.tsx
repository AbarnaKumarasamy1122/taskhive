"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import api from "@/services/api";

export default function RoleForm() {
  const [name, setName] = useState("");

  const submit = async () => {
    try {
      await api.post("/roles", {
        name,
      });

      toast.success("Role created");
    } catch {
      toast.error("Error creating role");
    }
  };

  return (
    <div
      className="
bg-white
p-6
rounded
shadow
"
    >
      <h2 className="font-bold text-xl">Create Role</h2>

      <input
        className="
border
p-2
w-full
mt-3
"
        placeholder="Role name"
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={submit}
        className="
bg-blue-600
text-white
px-4
py-2
mt-3
rounded
"
      >
        Save
      </button>
    </div>
  );
}
