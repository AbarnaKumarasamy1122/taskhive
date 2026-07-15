import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getMyTasks,
  updateTaskStatus,
  addComment,
} from "@/services/task.service";

export function useMyTasks() {
  return useQuery({
    queryKey: ["my-tasks"],

    queryFn: getMyTasks,
  });
}

export function useTaskActions() {
  const queryClient = useQueryClient();

  return {
    status: useMutation({
      mutationFn: ({
        id,

        status,
      }: any) => updateTaskStatus(id, status),

      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ["my-tasks"],
        });
      },
    }),

    comment: useMutation({
      mutationFn: ({
        taskId,

        comment,
      }: any) => addComment(taskId, comment),
    }),
  };
}
