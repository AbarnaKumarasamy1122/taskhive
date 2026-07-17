"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import { useProjectMutations } from "@/hooks/useProjects";

export default function ProjectForm() {
  const { create } = useProjectMutations();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "PLANNING",
    startDate: "",
    endDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
  if (!form.title.trim() || !form.description.trim()) {
    toast.error("Title and description are required");
    return;
  }

  create.mutate(
    {
      title: form.title,

      description: form.description,

      status: form.status,

      startDate: form.startDate || undefined,

      endDate: form.endDate || undefined,
    },
    {
      onSuccess() {
        toast.success("Project created successfully");

        setForm({
          title: "",
          description: "",
          status: "PLANNING",
          startDate: "",
          endDate: "",
        });
      },

      onError(error: any) {
        toast.error(
          error?.response?.data?.message ??
            "Project creation failed"
        );
      },
    }
  );
};

  return (
    <div
      className="
      bg-white
      rounded
      shadow
      p-6
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
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Project title"
        className="
        border
        rounded
        p-2
        w-full
        "
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Project description"
        rows={4}
        className="
        border
        rounded
        p-2
        w-full
        "
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="
        border
        rounded
        p-2
        w-full
        "
      >
        <option value="PLANNING">Planning</option>

        <option value="ACTIVE">Active</option>

        <option value="ON_HOLD">On Hold</option>

        <option value="COMPLETED">Completed</option>
      </select>

      <div
        className="
        grid
        grid-cols-2
        gap-4
        "
      >
        <div>
          <label
            className="
            text-sm
            text-gray-600
            "
          >
            Start Date
          </label>

          <input
            name="startDate"
            type="date"
            value={form.startDate}
            onChange={handleChange}
            className="
            border
            rounded
            p-2
            w-full
            "
          />
        </div>

        <div>
          <label
            className="
            text-sm
            text-gray-600
            "
          >
            End Date
          </label>

          <input
            name="endDate"
            type="date"
            value={form.endDate}
            onChange={handleChange}
            className="
            border
            rounded
            p-2
            w-full
            "
          />
        </div>
      </div>

      <button
        onClick={submit}
        disabled={create.isPending}
        className="
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-5
        py-2
        rounded
        "
      >
        {create.isPending ? "Creating..." : "Create Project"}
      </button>
    </div>
  );
}
