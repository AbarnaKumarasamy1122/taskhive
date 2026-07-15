"use client";

import { useMyTasks } from "@/hooks/useTasks";

import MyTaskTable from "@/components/member/MyTaskTable";

export default function TasksPage() {
  const { data = [] } = useMyTasks();

  return (
    <div>
      <h1
        className="
text-3xl
font-bold
mb-6
"
      >
        My Tasks
      </h1>

      <MyTaskTable tasks={data} />
    </div>
  );
}
