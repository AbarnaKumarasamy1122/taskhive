"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import useAuth from "@/hooks/useAuth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { user, loading } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div
        className="
h-screen
flex
items-center
justify-center
"
      >
        Loading...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div
      className="
flex
h-screen
bg-gray-100
"
    >
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div
        className="
flex-1
flex
flex-col
"
      >
        <Navbar setOpen={setSidebarOpen} />

        <main
          className="
flex-1
overflow-y-auto
p-6
"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
