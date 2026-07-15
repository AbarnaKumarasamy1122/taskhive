"use client";

import Link from "next/link";
import useAuth from "@/hooks/useAuth";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="hidden md:block w-64 bg-gray-900 text-white">
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">TaskHive</h2>
      </div>

      <nav className="space-y-2 p-4">
        <Link href="/dashboard" className="block rounded p-2 hover:bg-gray-700">
          Dashboard
        </Link>

        {user?.role === "ADMIN" && (
          <>
            <Link
              href="/dashboard/admin/users"
              className="block rounded p-2 hover:bg-gray-700"
            >
              Users
            </Link>

            <Link
              href="/dashboard/admin/projects"
              className="block rounded p-2 hover:bg-gray-700"
            >
              Projects
            </Link>

            <Link
              href="/dashboard/admin/statistics"
              className="block rounded p-2 hover:bg-gray-700"
            >
              Statistics
            </Link>
          </>
        )}

        {user?.role === "PROJECT_MANAGER" && (
          <>
            <Link
              href="/dashboard/manager/projects"
              className="block rounded p-2 hover:bg-gray-700"
            >
              My Projects
            </Link>

            <Link
              href="/dashboard/manager/tasks"
              className="block rounded p-2 hover:bg-gray-700"
            >
              Tasks
            </Link>

            <Link
              href="/dashboard/manager/members"
              className="block rounded p-2 hover:bg-gray-700"
            >
              Members
            </Link>
          </>
        )}

        {user?.role === "TEAM_MEMBER" && (
          <>
            <Link
              href="/dashboard/member/projects"
              className="block rounded p-2 hover:bg-gray-700"
            >
              My Projects
            </Link>

            <Link
              href="/dashboard/member/tasks"
              className="block rounded p-2 hover:bg-gray-700"
            >
              My Tasks
            </Link>
          </>
        )}
      </nav>
    </aside>
  );
}
