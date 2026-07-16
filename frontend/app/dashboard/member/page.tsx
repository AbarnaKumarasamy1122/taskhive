"use client";

import RoleGuard from "@/components/auth/RoleGuard";

import Link from "next/link";

export default function MemberDashboard() {
  return (
    <RoleGuard role="TEAM_MEMBER">
      <div>
        <h1
          className="
text-3xl
font-bold
mb-6
"
        >
          Team Member Dashboard
        </h1>

        <div
          className="
grid
md:grid-cols-4
gap-5
"
        >
          <Link href="/dashboard/member/projects" className="card">
            Assigned Projects
          </Link>

          <Link href="/dashboard/member/tasks" className="card">
            My Tasks
          </Link>

          <Link href="/dashboard/member/notifications" className="card">
            Notifications
          </Link>

          <Link href="/dashboard/member/activity" className="card">
            Activity
          </Link>
        </div>
      </div>
    </RoleGuard>
  );
}
