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
"
        >
          <thead>
            <tr
              className="
border-b
"
            >
              <th
                className="
p-4
text-left
"
              >
                Title
              </th>

              <th>Status</th>

              <th
                className="
hidden
md:table-cell
"
              >
                Manager
              </th>

              <th
                className="
hidden
md:table-cell
"
              >
                Members
              </th>

              <th
                className="
hidden
md:table-cell
"
              >
                Start Date
              </th>

              <th
                className="
hidden
md:table-cell
"
              >
                End Date
              </th>

              <th>Actions</th>
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
"
                >
                  {project.title}
                </td>

                <td>
                  <span
                    className="
px-2
py-1
rounded
text-sm
bg-gray-100
"
                  >
                    {project.status}
                  </span>
                </td>

                <td
                  className="
hidden
md:table-cell
"
                >
                  {project.manager?.name ?? "-"}
                </td>

                <td
                  className="
hidden
md:table-cell
"
                >
                  {project.members?.length ?? 0}
                </td>

                <td
                  className="
hidden
md:table-cell
"
                >
                  {formatDate(project.startDate)}
                </td>

                <td
                  className="
hidden
md:table-cell
"
                >
                  {formatDate(project.endDate)}
                </td>

                <td>
                  <div
                    className="
flex
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

      {/* Mobile Details Modal */}

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
w-full
max-w-md
p-6
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
                  {member.user?.name}-{member.user?.email}
                </p>
              ))}
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="
bg-black
text-white
w-full
py-2
rounded
"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}

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
"
        >
          <div
            className="
bg-white
rounded
p-6
w-full
max-w-sm
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

            <p
              className="
text-gray-600
"
            >
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
px-4
py-2
rounded
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
px-4
py-2
rounded
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
