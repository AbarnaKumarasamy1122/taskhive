"use client";

import ProjectTable from "@/components/admin/ProjectTable";

export default function AdminProjects() {
  return (
    <div>
      <h1
        className="
text-3xl
font-bold
"
      >
        All Projects
      </h1>

      <ProjectTable />
    </div>
  );
}
