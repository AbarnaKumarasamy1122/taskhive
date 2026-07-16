"use client";

import { useProjects } from "@/hooks/useProjects";

export default function ProjectTable() {
  const { data } = useProjects();

  return (
    <div
      className="
space-y-4
"
    >
      {data?.map((project: any) => (
        <div
          key={project.id}
          className="
bg-white
p-5
rounded
shadow
"
        >
          <h2 className="font-bold">{project.title}</h2>

          <p>
            Manager:
            {project.manager.name}
          </p>

          <p>
            Status:
            {project.status}
          </p>
        </div>
      ))}
    </div>
  );
}
