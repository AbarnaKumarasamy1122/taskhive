"use client";

import RoleGuard from "@/components/auth/RoleGuard";

import StatCard from "@/components/dashboard/StatCard";

import { useDashboard } from "@/hooks/useDashboard";

export default function AdminDashboard() {
  const { data, isLoading } = useDashboard();

  return (
    <RoleGuard role="ADMIN">
      <div>
        <h1
          className="
text-3xl
font-bold
mb-6
"
        >
          Administrator Dashboard
        </h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div
            className="
grid
grid-cols-1
md:grid-cols-4
gap-6
"
          >
            <StatCard title="Users" value={data?.users ?? 0} />

            <StatCard title="Projects" value={data?.projects ?? 0} />

            <StatCard title="Tasks" value={data?.tasks ?? 0} />

            <StatCard
              title="Completed Tasks"
              value={data?.completedTasks ?? 0}
            />
          </div>
        )}
      </div>
    </RoleGuard>
  );
}
