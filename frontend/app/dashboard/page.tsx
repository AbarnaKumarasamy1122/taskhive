"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";

export default function DashboardPage() {
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const role = typeof user.role === "string" ? user.role : user.role.name;

    switch (role) {
      case "ADMIN":
        router.replace("/dashboard/admin");
        break;

      case "PROJECT_MANAGER":
        router.replace("/dashboard/manager");
        break;

      case "TEAM_MEMBER":
        router.replace("/dashboard/member");
        break;
    }
  }, [user]);

  return (
    <div className="flex h-screen items-center justify-center">
      Redirecting...
    </div>
  );
}
