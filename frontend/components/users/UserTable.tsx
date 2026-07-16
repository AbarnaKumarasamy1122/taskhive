"use client";

import { useState } from "react";

import Table from "@/components/ui/Table";

import Button from "@/components/ui/Button";

interface UserTableProps {
  users: any[];
}

export default function UserTable({ users }: UserTableProps) {
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const limit = 10;

  const filteredUsers = users.filter(
    (user: any) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()),
  );

  const start = (page - 1) * limit;

  const paginatedUsers = filteredUsers.slice(
    start,

    start + limit,
  );

  return (
    <div className="space-y-5">
      <input
        className="
border
rounded
p-3
w-full
"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table headers={["Name", "Email", "Role", "Actions"]}>
        {paginatedUsers.map((user: any) => (
          <tr key={user.id} className="border-t">
            <td className="p-4">{user.name}</td>

            <td className="p-4">{user.email}</td>

            <td className="p-4">{user.role?.name || user.role}</td>

            <td
              className="
p-4
space-x-2
"
            >
              <Button>Edit</Button>

              <Button
                className="
bg-red-500
hover:bg-red-600
"
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </Table>

      <div
        className="
flex
justify-center
gap-3
"
      >
        <Button onClick={() => setPage((p) => Math.max(1, p - 1))}>
          Previous
        </Button>

        <span className="p-2">Page {page}</span>

        <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
      </div>
    </div>
  );
}
