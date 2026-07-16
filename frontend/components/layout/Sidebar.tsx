"use client";

import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { X } from "lucide-react";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const { user } = useAuth();
  const role = typeof user?.role === "string" ? user.role : user?.role?.name;

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-64
          bg-gray-900 text-white
          transform transition-transform duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0
          md:static
          md:flex-shrink-0
        `}
      >
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-2xl font-bold">TaskHive</h2>

          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-2 p-4">
          <Link
            href="/dashboard"
            className="block rounded p-2 hover:bg-gray-700"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>

          {role === "ADMIN" && (
            <>
              <Link
                href="/dashboard/admin/users"
                className="block rounded p-2 hover:bg-gray-700"
                onClick={() => setOpen(false)}
              >
                Users
              </Link>

              <Link
                href="/dashboard/admin/projects"
                className="block rounded p-2 hover:bg-gray-700"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>

              <Link
                href="/dashboard/admin/statistics"
                className="block rounded p-2 hover:bg-gray-700"
                onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
              >
                My Projects
              </Link>

              <Link
                href="/dashboard/manager/tasks"
                className="block rounded p-2 hover:bg-gray-700"
                onClick={() => setOpen(false)}
              >
                Tasks
              </Link>

              <Link
                href="/dashboard/manager/members"
                className="block rounded p-2 hover:bg-gray-700"
                onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
              >
                My Projects
              </Link>

              <Link
                href="/dashboard/member/tasks"
                className="block rounded p-2 hover:bg-gray-700"
                onClick={() => setOpen(false)}
              >
                My Tasks
              </Link>
            </>
          )}
        </nav>
      </aside>
    </>
  );
}
