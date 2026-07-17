"use client";

import RoleGuard from "@/components/auth/RoleGuard";

import { useProjects } from "@/hooks/useProjects";

export default function ManagerDashboard() {
  const { data, isLoading } = useProjects();

  const projects = Array.isArray(data) ? data : [];

  if (isLoading) {
    return (
      <RoleGuard role="PROJECT_MANAGER">
        <div>Loading dashboard...</div>
      </RoleGuard>
    );
  }

  return (
    <RoleGuard role="PROJECT_MANAGER">
      <div
        className="
space-y-6
"
      >
        <h1
          className="
text-3xl
font-bold
"
        >
          Project Manager Dashboard
        </h1>

        <div
          className="
grid
grid-cols-1
md:grid-cols-3
gap-5
"
        >
          <Card title="Total Projects" value={projects.length} />

          <Card
            title="Active Projects"
            value={projects.filter((p: any) => p.status === "ACTIVE").length}
          />

          <Card
            title="Completed Projects"
            value={projects.filter((p: any) => p.status === "COMPLETED").length}
          />
        </div>
      </div>
    </RoleGuard>
  );
}

function Card({
  title,

  value,
}: {
  title: string;

  value: number;
}) {
  return (
    <div
      className="
bg-white
rounded
shadow
p-6
"
    >
      <h2>{title}</h2>

      <p
        className="
text-3xl
font-bold
"
      >
        {value}
      </p>
    </div>
  );
}
