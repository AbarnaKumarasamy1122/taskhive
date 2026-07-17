"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import { useProjectMutations } from "@/hooks/useProjects";

import MemberSelector from "./MemberSelector";

export default function EditProjectModal({ project }: { project: any }) {
  const [open, setOpen] = useState(false);

  const { update } = useProjectMutations();

  const [form, setForm] = useState({
    title: project.title,

    description: project.description,

    status: project.status,

    startDate: project.startDate?.substring(0, 10) || "",

    endDate: project.endDate?.substring(0, 10) || "",

    members: project.members?.map((m: any) => m.userId) || [],
  });

  const submit = () => {
    const payload = {
      title: form.title,

      description: form.description,

      status: form.status,

      startDate: form.startDate || null,

      endDate: form.endDate || null,

      members: form.members,
    };

    update.mutate(
      {
        id: project.id,
        data: payload,
      },
      {
        onSuccess() {
          toast.success("Project updated successfully");

          setOpen(false);
        },

        onError(error: any) {
          toast.error(error?.response?.data?.message ?? "Update failed");
        },
      },
    );
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
bg-yellow-500
text-white
px-3
py-1
rounded
"
      >
        Edit
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
z-50
"
        >
          <div
            className="
bg-white
rounded
p-6
w-full
max-w-lg
space-y-4
"
          >
            <div
              className="
              flex
              justify-between
              "
            >
              <h2
                className="
                text-xl
                font-bold
                "
              >
                Edit Project
              </h2>

              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <input
              className="
border
p-2
w-full
"
              value={form.title}
              placeholder="Project title"
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
              value={form.description}
              placeholder="Project description"
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
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status: e.target.value,
                })
              }
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
gap-3
"
            >
              <label className="flex flex-col gap-1">Start Date</label>
              <input
                type="date"
                className="
border
p-2
rounded
"
                value={form.startDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    startDate: e.target.value,
                  })
                }
              />

              <label className="flex flex-col gap-1">End Date</label>
              <input
                type="date"
                className="
border
p-2
rounded
"
                value={form.endDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    endDate: e.target.value,
                  })
                }
              />
            </div>

            <MemberSelector
              selected={form.members}
              setSelected={(members) =>
                setForm({
                  ...form,
                  members,
                })
              }
            />

            <button
              onClick={submit}
              className="
bg-black
text-white
w-full
py-2
rounded
"
            >
              Update Project
            </button>
          </div>
        </div>
      )}
    </>
  );
}
