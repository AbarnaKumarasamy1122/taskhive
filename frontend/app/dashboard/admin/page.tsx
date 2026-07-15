"use client";

import StatCard from "@/components/dashboard/StatCard";
import { useDashboard } from "@/hooks/useDashboard";

export default function AdminDashboard() {
  const { data, isLoading } = useDashboard();

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Administrator Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">
        <StatCard title="Users" value={data.users} />

        <StatCard title="Projects" value={data.projects} />

        <StatCard title="Tasks" value={data.tasks} />

        <StatCard title="Completed" value={data.completedTasks} />
      </div>
    </div>
  );
}
