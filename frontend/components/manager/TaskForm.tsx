"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import { useCreateTask } from "@/hooks/useTasks";

interface Props {
  projectId: string;

  users: any[];
}

export default function TaskForm({
  projectId,

  users,
}: Props) {
  const { create } = useCreateTask();

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "MEDIUM",
    assignedTo: "",
  });

  const submit = () => {
    if (!form.title || !form.assignedTo) {
      toast.error("Title and member required");

      return;
    }

    create.mutate(
      {
        ...form,

        projectId,
      },

      {
        onSuccess() {
          toast.success("Task created");

          setForm({
            title: "",
            description: "",
            priority: "MEDIUM",
            assignedTo: "",
          });
        },

        onError() {
          toast.error("Task creation failed");
        },
      },
    );
  };

  return (
    <div
      className="
bg-white
p-5
rounded
shadow
space-y-4
"
    >
      <h2
        className="
font-bold
text-xl
"
      >
        Create Task
      </h2>

      <input
        className="
border
p-2
w-full
rounded
"
        placeholder="Task title"
        value={form.title}
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
rounded
"
        placeholder="Description"
        value={form.description}
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
        value={form.priority}
        onChange={(e) =>
          setForm({
            ...form,

            priority: e.target.value,
          })
        }
      >
        <option value="LOW">LOW</option>

        <option value="MEDIUM">MEDIUM</option>

        <option value="HIGH">HIGH</option>
      </select>

      <select
        className="
border
p-2
w-full
"
        value={form.assignedTo}
        onChange={(e) =>
          setForm({
            ...form,

            assignedTo: e.target.value,
          })
        }
      >
        <option value="">Select Member</option>

        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <button
        disabled={create.isPending}
        onClick={submit}
        className="
bg-blue-600
text-white
px-4
py-2
rounded
"
      >
        {create.isPending ? "Creating..." : "Create Task"}
      </button>
    </div>
  );
}
