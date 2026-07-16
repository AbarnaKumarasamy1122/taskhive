"use client";

import { useMyTasks } from "@/hooks/useMember";

import TaskCard from "@/components/member/TaskCard";

export default function TasksPage() {
  const { data, isLoading } = useMyTasks();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1
        className="
text-2xl
font-bold
mb-5
"
      >
        My Tasks
      </h1>

      <div
        className="
space-y-5
"
      >
        {data?.map((task: any) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
