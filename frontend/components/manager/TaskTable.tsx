"use client";

import { useTasks, useDeleteTask } from "@/hooks/useTasks";

export default function TaskTable() {
  const { data, isLoading, error } = useTasks();

  const { mutate: deleteTask } = useDeleteTask();

  const tasks = Array.isArray(data) ? data : [];

  if (isLoading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return (
      <p
        className="
      text-red-500
      "
      >
        Failed to load tasks
      </p>
    );
  }

  if (tasks.length === 0) {
    return (
      <div
        className="
      bg-white
      p-5
      rounded
      shadow
      "
      >
        No tasks available
      </div>
    );
  }

  return (
    <div
      className="
    bg-white
    rounded
    shadow
    overflow-x-auto
    "
    >
      <table
        className="
      w-full
      "
      >
        <thead>
          <tr
            className="
          border-b
          "
          >
            <th className="p-4 text-left">Task</th>

            <th>Priority</th>

            <th>Status</th>

            <th>Assigned To</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task: any) => (
            <tr
              key={task.id}
              className="
              border-b
              "
            >
              <td className="p-4">
                <p
                  className="
                font-medium
                "
                >
                  {task.title}
                </p>

                <p
                  className="
                text-sm
                text-gray-500
                "
                >
                  {task.description}
                </p>
              </td>

              <td>{task.priority}</td>

              <td>{task.status}</td>

              <td>{task.assignee?.name ?? "Not Assigned"}</td>

              <td>
                <button
                  onClick={() => deleteTask(task.id)}
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
    </div>
  );
}
