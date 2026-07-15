"use client";

import { useMyProjects } from "@/hooks/useMember";

import ProjectCard from "@/components/member/ProjectCard";

export default function ProjectsPage() {
  const {
    data = [],

    isLoading,
  } = useMyProjects();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1
        className="
text-3xl
font-bold
mb-6
"
      >
        My Projects
      </h1>

      <div
        className="
grid
grid-cols-3
gap-6
"
      >
        {data.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
