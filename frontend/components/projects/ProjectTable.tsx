"use client";

import Button from "@/components/ui/Button";

import { useProjects, useProjectMutations } from "@/hooks/useProjects";

export default function ProjectTable() {
  const {
    data = [],

    isLoading,
  } = useProjects();

  const { remove } = useProjectMutations();

  if (isLoading) return <p>Loading...</p>;

  return (
    <table
      className="
w-full
bg-white
shadow
"
    >
      <thead>
        <tr className="border-b">
          <th className="p-4">Title</th>

          <th>Status</th>

          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((project: any) => (
          <tr key={project.id} className="border-b">
            <td className="p-4">{project.title}</td>

            <td>{project.status}</td>

            <td>
              <Button>Edit</Button>

              <Button
                className="
bg-red-500
"
                onClick={() => remove.mutate(project.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
