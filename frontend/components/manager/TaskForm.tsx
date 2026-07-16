"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import { createTask } from "@/services/task.service";

interface Props {
  projectId: string;

  users: any[];
}

export default function TaskForm({ projectId, users }: Props) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "MEDIUM",
    assignedTo: "",
  });

  const submit = async () => {
    try {
      await createTask({
        ...form,

        projectId,
      });

      toast.success("Task created");
    } catch {
      toast.error("Task creation failed");
    }
  };

  return (
    <div
      className="
bg-white
p-5
shadow
rounded
space-y-3
"
    >
      <h2
        className="
font-bold
"
      >
        Create Task
      </h2>

      <input
        className="border p-2 w-full"
        placeholder="Task title"
        onChange={(e) =>
          setForm({
            ...form,
            title: e.target.value,
          })
        }
      />

      <textarea
        className="
border
p-2
w-full
"
        placeholder="Description"
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
      />

      <select
        className="
border
p-2
w-full
"
        onChange={(e) =>
          setForm({
            ...form,
            priority: e.target.value,
          })
        }
      >
        <option>LOW</option>

        <option>MEDIUM</option>

        <option>HIGH</option>
      </select>

      <select
        className="
border
p-2
w-full
"
        onChange={(e) =>
          setForm({
            ...form,
            assignedTo: e.target.value,
          })
        }
      >
        <option>Assign Member</option>

        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <button
        onClick={submit}
        className="
bg-blue-600
text-white
px-4
py-2
rounded
"
      >
        Create Task
      </button>
    </div>
  );
}
