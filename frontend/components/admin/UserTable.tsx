"use client";

import { useUsers } from "@/hooks/useUsers";

export default function UserTable() {
  const { data, isLoading } = useUsers();

  if (isLoading) return <p>Loading...</p>;

  return (
    <table
      className="
w-full
bg-white
shadow
"
    >
      <thead>
        <tr>
          <th>Name</th>

          <th>Email</th>

          <th>Role</th>

          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {data?.map((user: any) => (
          <tr key={user.id}>
            <td>{user.name}</td>

            <td>{user.email}</td>

            <td>{user.role.name}</td>

            <td>
              <button
                className="
bg-red-500
text-white
px-3
py-1
rounded
"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
