"use client";

import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
flex
flex-1
flex-col
overflow-hidden
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
