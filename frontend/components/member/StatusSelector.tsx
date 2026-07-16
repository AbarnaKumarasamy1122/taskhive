"use client";

import { useUpdateTaskStatus } from "@/hooks/useMember";

export default function StatusSelector({ task }: any) {
  const mutation = useUpdateTaskStatus();

  return (
    <select
      value={task.status}
      onChange={(e) =>
        mutation.mutate({
          id: task.id,

          status: e.target.value,
        })
      }
      className="
border
p-2
mt-3
"
    >
      <option>TODO</option>

      <option>IN_PROGRESS</option>

      <option>COMPLETED</option>
    </select>
  );
}
