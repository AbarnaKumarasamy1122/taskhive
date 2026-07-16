"use client";

import { useTasks } from "@/hooks/useTasks";

export default function TaskTable() {
  const { data, isLoading } = useTasks();

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
          <th>Title</th>

          <th>Priority</th>

          <th>Status</th>

          <th>Assigned</th>
        </tr>
      </thead>

      <tbody>
        {data?.map((task: any) => (
          <tr key={task.id}>
            <td>{task.title}</td>

            <td>{task.priority}</td>

            <td>{task.status}</td>

            <td>{task.assignee.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
