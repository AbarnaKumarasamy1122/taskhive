"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getTasks,
  updateTaskStatus,
  createTask,
  deleteTask,
  addComment,
} from "@/services/task.service";

import toast from "react-hot-toast";

// Get Tasks

export function useTasks() {
  return useQuery({
    queryKey: ["tasks"],

    queryFn: getTasks,
  });
}

// Update Task Status

export function useUpdateTaskStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { id: string; status: string }) =>
      updateTaskStatus(data.id, data.status),

    onSuccess() {
      toast.success("Task status updated");

      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },

    onError() {
      toast.error("Failed to update task status");
    },
  });
}

// Create Task

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,

    onSuccess() {
      toast.success("Task created");

      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },

    onError() {
      toast.error("Failed to create task");
    },
  });
}

// Delete Task

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,

    onSuccess() {
      toast.success("Task deleted");

      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },

    onError() {
      toast.error("Failed to delete task");
    },
  });
}

// Task Actions
// Status Update + Comments

export function useTaskActions() {
  const queryClient = useQueryClient();

  // Update Status

  const status = useMutation({
    mutationFn: (data: { id: string; status: string }) =>
      updateTaskStatus(data.id, data.status),

    onSuccess() {
      toast.success("Task status updated");

      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },

    onError() {
      toast.error("Failed to update task status");
    },
  });

  // Add Comment

  const comment = useMutation({
    mutationFn: (data: { taskId: string; comment: string }) =>
      addComment(data.taskId, data.comment),

    onSuccess() {
      toast.success("Comment added");

      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },

    onError() {
      toast.error("Failed to add comment");
    },
  });

  return {
    status,

    comment,
  };
}
