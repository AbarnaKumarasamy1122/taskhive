"use client";

import { useState } from "react";

import { useProjectMutations } from "@/hooks/useProjects";

import toast from "react-hot-toast";

export default function CreateProjectModal() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",

    description: "",

    status: "ACTIVE",
  });

  const { create } = useProjectMutations();

  const submit = () => {
    create.mutate(form, {
      onSuccess() {
        toast.success("Project created");

        setOpen(false);
      },
    });
  };

  return (
    <>
      <button
        className="
bg-blue-600
text-white
px-4
py-2
rounded
"
        onClick={() => setOpen(true)}
      >
        + Create Project
      </button>

      {open && (
        <div
          className="
fixed
inset-0
bg-black/50
flex
items-center
justify-center
"
        >
          <div
            className="
bg-white
p-6
rounded
space-y-3
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
              placeholder="Title"
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

            <button
              onClick={submit}
              className="
bg-blue-600
text-white
p-2
rounded
"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}
