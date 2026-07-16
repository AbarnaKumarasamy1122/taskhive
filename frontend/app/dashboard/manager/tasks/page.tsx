"use client";

import TaskTable from "@/components/manager/TaskTable";

export default function Tasks() {
  return (
    <div
      className="
space-y-5
"
    >
      <h1
        className="
text-3xl
font-bold
"
      >
        Project Tasks
      </h1>

      <TaskTable />
    </div>
  );
}
