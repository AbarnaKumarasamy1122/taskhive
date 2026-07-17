"use client";

import { useState } from "react";

import { useTasks, useDeleteTask } from "@/hooks/useTasks";

export default function TaskTable() {
  const { data, isLoading, error } = useTasks();

  const { mutate: deleteTask } = useDeleteTask();

  const [selected, setSelected] = useState<any>(null);

  const [remove, setRemove] = useState<any>(null);

  const tasks = Array.isArray(data) ? data : [];

  if (isLoading) return <p>Loading tasks...</p>;

  if (error) return <p className="text-red-500">Failed to load tasks</p>;

  return (
    <>
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
text-center
"
            >
              <th className="p-4 text-left">Task</th>

              <th>Priority</th>

              <th>Status</th>

              <th
                className="
hidden
md:table-cell
"
              >
                Assigned To
              </th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task: any) => (
              <tr
                key={task.id}
                onClick={() => {
                  if (window.innerWidth < 768) setSelected(task);
                }}
                className="
border-b
hover:bg-gray-50
text-center
cursor-pointer
"
              >
                <td
                  className="
p-4
text-left
"
                >
                  <p className="font-medium">{task.title}</p>

                  <p
                    className="
hidden
md:block
text-sm
text-gray-500
"
                  >
                    {task.description}
                  </p>
                </td>

                <td>{task.priority}</td>

                <td>
                  <span
                    className="
bg-gray-100
px-2
py-1
rounded
text-sm
"
                  >
                    {task.status}
                  </span>
                </td>

                <td
                  className="
hidden
md:table-cell
"
                >
                  {task.assignee?.name ?? "Not assigned"}
                </td>

                <td>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      setRemove(task);
                    }}
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

      {/* Mobile Details */}

      {selected && (
        <div
          className="
fixed
inset-0
bg-black/50
flex
items-center
justify-center
z-50
p-5
"
        >
          <div
            className="
bg-white
rounded
p-6
w-full
max-w-md
space-y-3
"
          >
            <div
              className="
flex
justify-between
"
            >
              <h2 className="font-bold text-xl">Task Details</h2>

              <button onClick={() => setSelected(null)}>✕</button>
            </div>

            <p>
              <b>Title:</b> {selected.title}
            </p>

            <p>
              <b>Description:</b> {selected.description}
            </p>

            <p>
              <b>Status:</b> {selected.status}
            </p>

            <p>
              <b>Priority:</b> {selected.priority}
            </p>

            <p>
              <b>Assigned:</b>
              {selected.assignee?.name}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="
bg-black
text-white
w-full
py-2
rounded
"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Delete Modal */}

      {remove && (
        <div
          className="
fixed
inset-0
bg-black/50
flex
items-center
justify-center
z-50
"
        >
          <div
            className="
bg-white
p-6
rounded
space-y-4
"
          >
            <h2 className="font-bold text-xl">Delete Task?</h2>

            <p>Delete {remove.title}?</p>

            <div className="flex gap-3">
              <button
                onClick={() => setRemove(null)}
                className="
border
px-4
py-2
rounded
"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  deleteTask(remove.id);

                  setRemove(null);
                }}
                className="
bg-red-500
text-white
px-4
py-2
rounded
"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
