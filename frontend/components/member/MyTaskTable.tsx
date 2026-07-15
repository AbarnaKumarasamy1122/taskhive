"use client";

import UpdateStatusDropdown from "./UpdateStatusDropdown";

interface Props {
  tasks: any[];
}

export default function MyTaskTable({ tasks }: Props) {
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
          <th className="p-4">Task</th>

          <th>Priority</th>

          <th>Status</th>

          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <tr key={task.id} className="border-t">
            <td className="p-4">{task.title}</td>

            <td>{task.priority}</td>

            <td>{task.status}</td>

            <td>
              <UpdateStatusDropdown task={task} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
