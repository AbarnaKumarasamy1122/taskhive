"use client";

import UserForm from "@/components/admin/UserForm";

import UserTable from "@/components/admin/UserTable";

export default function UsersPage() {
  return (
    <div
      className="
space-y-8
"
    >
      <h1
        className="
text-3xl
font-bold
"
      >
        Manage Users
      </h1>

      <UserForm />

      <UserTable />
    </div>
  );
}
