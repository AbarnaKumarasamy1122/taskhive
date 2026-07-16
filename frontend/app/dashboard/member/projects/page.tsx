"use client";

import { useMyProjects } from "@/hooks/useMember";

import ProjectCard from "@/components/member/ProjectCard";

export default function ProjectsPage() {
  const { data, isLoading } = useMyProjects();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1
        className="
text-2xl
font-bold
mb-5
"
      >
        Assigned Projects
      </h1>

      <div
        className="
grid
md:grid-cols-3
gap-5
"
      >
        {data?.map((p: any) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
