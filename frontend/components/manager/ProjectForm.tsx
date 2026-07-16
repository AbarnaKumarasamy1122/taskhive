"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import { createProject } from "@/services/project.service";

export default function ProjectForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const submit = async () => {
    try {
      await createProject(form);

      toast.success("Project created successfully");

      setForm({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      });
    } catch {
      toast.error("Project creation failed");
    }
  };

  return (
    <div
      className="
bg-white
p-6
rounded
shadow
space-y-4
"
    >
      <h2
        className="
text-xl
font-bold
"
      >
        Create Project
      </h2>

      <input
        className="
border
p-2
w-full
"
        placeholder="Project title"
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

      <input
        type="date"
        className="border p-2 w-full"
        onChange={(e) =>
          setForm({
            ...form,
            startDate: e.target.value,
          })
        }
      />

      <input
        type="date"
        className="border p-2 w-full"
        onChange={(e) =>
          setForm({
            ...form,
            endDate: e.target.value,
          })
        }
      />

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
        Create Project
      </button>
    </div>
  );
}
