"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (user.role === "ADMIN") router.push("/dashboard/admin");
    else if (user.role === "PROJECT_MANAGER") router.push("/dashboard/manager");
    else router.push("/dashboard/member");
  }, []);

  return null;
}
