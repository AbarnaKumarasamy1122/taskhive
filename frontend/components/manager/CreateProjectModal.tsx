"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import { useProjectMutations } from "@/hooks/useProjects";

import MemberSelector from "@/components/manager/MemberSelector";

export default function CreateProjectModal() {
  const [open, setOpen] = useState(false);

  const { create } = useProjectMutations();

  const [form, setForm] = useState<{
    title: string;
    description: string;
    status: string;
    startDate: string;
    endDate: string;
    members: string[];
  }>({
    title: "",
    description: "",
    status: "PLANNING",
    startDate: "",
    endDate: "",
    members: [],
  });

  const submit = () => {
    if (!form.title.trim() || !form.description.trim()) {
      toast.error("Title and description required");
      return;
    }

    create.mutate(
      {
        title: form.title,

        description: form.description,

        status: form.status,

        startDate: form.startDate || undefined,

        endDate: form.endDate || undefined,

        members: form.members,
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
            members: [],
          });

          setOpen(false);
        },

        onError(error: any) {
          toast.error(
            error?.response?.data?.message || "Project creation failed",
          );
        },
      },
    );
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
        bg-blue-600
        text-white
        px-5
        py-2
        rounded
        "
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
                Create Project
              </h2>

              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* Title */}

            <input
              className="
              border
              p-2
              rounded
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

            {/* Description */}

            <textarea
              className="
              border
              p-2
              rounded
              w-full
              "
              placeholder="Project description"
              rows={4}
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
            />

            {/* Status */}

            <select
              className="
              border
              p-2
              rounded
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

            {/* Start Date and End Date */}

            <div
              className="
              grid
              grid-cols-2
              gap-3
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
                  type="date"
                  placeholder="Start date"
                  value={form.startDate}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      startDate: e.target.value,
                    })
                  }
                  className="
                  border
                  p-2
                  rounded
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
                  type="date"
                  placeholder="End date"
                  value={form.endDate}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      endDate: e.target.value,
                    })
                  }
                  className="
                  border
                  p-2
                  rounded
                  w-full
                  "
                />
              </div>
            </div>

            {/* Member Selector */}

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
              disabled={create.isPending}
              onClick={submit}
              className="
              bg-black
              text-white
              px-5
              py-2
              rounded
              w-full
              "
            >
              {create.isPending ? "Creating..." : "Create Project"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
