"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";

import { useProjects, useProjectMutations } from "@/hooks/useProjects";

import EditProjectModal from "@/components/manager/EditProjectModal";

export default function ProjectTable() {
  const { data, isLoading, error } = useProjects();

  const { remove } = useProjectMutations();

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const [deleteProject, setDeleteProject] = useState<any>(null);

  const projects = Array.isArray(data) ? data : [];

  const formatDate = (date: string | null) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p className="text-red-500">Failed to load projects</p>;
  }

  if (projects.length === 0) {
    return (
      <div
        className="
      bg-white
      p-5
      rounded
      shadow
      "
      >
        No projects created yet.
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table */}

      <div
        className="
        bg-white
        rounded
        shadow
        overflow-x-auto
        "
      >
        <table
          className="
          w-full
          table-fixed
          "
        >
          <thead>
            <tr
              className="
              border-b
              bg-gray-50
              "
            >
              <th
                className="
                w-[25%]
                p-4
                text-left
                "
              >
                Title
              </th>

              <th
                className="
                w-[15%]
                text-center
                "
              >
                Status
              </th>

              <th
                className="
                hidden
                md:table-cell
                w-[15%]
                text-center
                "
              >
                Manager
              </th>

              <th
                className="
                hidden
                md:table-cell
                w-[10%]
                text-center
                "
              >
                Members
              </th>

              <th
                className="
                hidden
                md:table-cell
                w-[12%]
                text-center
                "
              >
                Start Date
              </th>

              <th
                className="
                hidden
                md:table-cell
                w-[12%]
                text-center
                "
              >
                End Date
              </th>

              <th
                className="
                w-[15%]
                text-center
                "
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project: any) => (
              <tr
                key={project.id}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setSelectedProject(project);
                  }
                }}
                className="
                border-b
                hover:bg-gray-50
                cursor-pointer
                "
              >
                <td
                  className="
                  p-4
                  font-medium
                  truncate
                  "
                >
                  {project.title}
                </td>

                <td
                  className="
                  text-center
                  "
                >
                  <span
                    className="
                    bg-gray-100
                    px-2
                    py-1
                    rounded
                    text-sm
                    "
                  >
                    {project.status}
                  </span>
                </td>

                <td
                  className="
                  hidden
                  md:table-cell
                  text-center
                  "
                >
                  {project.manager?.name ?? "-"}
                </td>

                <td
                  className="
                  hidden
                  md:table-cell
                  text-center
                  "
                >
                  {project.members?.length ?? 0}
                </td>

                <td
                  className="
                  hidden
                  md:table-cell
                  text-center
                  text-sm
                  "
                >
                  {formatDate(project.startDate)}
                </td>

                <td
                  className="
                  hidden
                  md:table-cell
                  text-center
                  text-sm
                  "
                >
                  {formatDate(project.endDate)}
                </td>

                <td
                  className="
                  text-center
                  "
                >
                  <div
                    className="
                    flex
                    justify-center
                    gap-2
                    "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <EditProjectModal project={project} />

                    <Button
                      className="
                      bg-red-500
                      "
                      onClick={() => {
                        setDeleteProject(project);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Detail Popup */}

      {selectedProject && (
        <div
          className="
          fixed
          inset-0
          bg-black/50
          flex
          items-center
          justify-center
          z-50
          p-4
          "
        >
          <div
            className="
            bg-white
            rounded
            max-w-md
            w-full
            p-6
            space-y-4
            "
          >
            <div
              className="
              flex
              justify-between
              items-center
              "
            >
              <h2
                className="
                text-xl
                font-bold
                "
              >
                Project Details
              </h2>

              <button onClick={() => setSelectedProject(null)}>✕</button>
            </div>

            <p>
              <b>Title:</b> {selectedProject.title}
            </p>

            <p>
              <b>Description:</b> {selectedProject.description}
            </p>

            <p>
              <b>Status:</b> {selectedProject.status}
            </p>

            <p>
              <b>Manager:</b> {selectedProject.manager?.name}
            </p>

            <p>
              <b>Start Date:</b> {formatDate(selectedProject.startDate)}
            </p>

            <p>
              <b>End Date:</b> {formatDate(selectedProject.endDate)}
            </p>

            <div>
              <b>Members</b>

              {selectedProject.members?.map((member: any) => (
                <p
                  key={member.id}
                  className="
                      text-sm
                      text-gray-600
                      "
                >
                  {member.user?.name} - {member.user?.email}
                </p>
              ))}
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="
              bg-black
              text-white
              rounded
              py-2
              w-full
              "
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}

      {deleteProject && (
        <div
          className="
          fixed
          inset-0
          bg-black/50
          flex
          items-center
          justify-center
          z-50
          p-4
          "
        >
          <div
            className="
            bg-white
            rounded
            p-6
            max-w-sm
            w-full
            space-y-5
            "
          >
            <h2
              className="
              text-xl
              font-bold
              "
            >
              Delete Project?
            </h2>

            <p className="text-gray-600">
              Are you sure you want to delete
              <b> {deleteProject.title}</b>?
            </p>

            <div
              className="
              flex
              gap-3
              "
            >
              <button
                onClick={() => setDeleteProject(null)}
                className="
                border
                rounded
                px-4
                py-2
                w-full
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  remove.mutate(deleteProject.id);

                  setDeleteProject(null);
                }}
                className="
                bg-red-500
                text-white
                rounded
                px-4
                py-2
                w-full
                "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
