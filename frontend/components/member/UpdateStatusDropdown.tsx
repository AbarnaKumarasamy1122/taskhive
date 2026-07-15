"use client";

import { useTaskActions } from "@/hooks/useTasks";

export default function UpdateStatusDropdown({ task }: any) {
  const { status } = useTaskActions();

  return (
    <select
      className="
border
rounded
p-2
"
      value={task.status}
      onChange={(e) => {
        status.mutate({
          id: task.id,

          status: e.target.value,
        });
      }}
    >
      <option value="TODO">TODO</option>

      <option value="IN_PROGRESS">IN_PROGRESS</option>

      <option value="COMPLETED">COMPLETED</option>
    </select>
  );
}
