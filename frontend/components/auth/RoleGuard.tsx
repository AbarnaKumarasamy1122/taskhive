"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/hooks/useAuth";

export default function RoleGuard({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string;
}) {
  const router = useRouter();

  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    const userRole =
      typeof user.role === "string"
        ? user.role
        : user.role.name;

    if (userRole !== role) {
      switch (userRole) {
        case "ADMIN":
          router.replace("/dashboard/admin");
          break;

        case "PROJECT_MANAGER":
          router.replace("/dashboard/manager");
          break;

        case "TEAM_MEMBER":
          router.replace("/dashboard/member");
          break;

        default:
          router.replace("/login");
      }
    }
  }, [loading, user, role, router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) return null;

  return <>{children}</>;
}