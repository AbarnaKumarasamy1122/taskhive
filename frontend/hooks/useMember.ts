"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getMyProjects,
  getMyTasks,
  updateTaskStatus,
  addComment,
  getNotifications,
  getActivities,
} from "@/services/member.service";

import toast from "react-hot-toast";

export function useMyProjects() {
  return useQuery({
    queryKey: ["member-projects"],

    queryFn: getMyProjects,
  });
}

export function useMyTasks() {
  return useQuery({
    queryKey: ["member-tasks"],

    queryFn: getMyTasks,
  });
}

export function useUpdateTaskStatus() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: any) => updateTaskStatus(id, status),

    onSuccess() {
      toast.success("Task status updated");

      client.invalidateQueries({
        queryKey: ["member-tasks"],
      });
    },
  });
}

export function useComment() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => addComment(data.taskId, data.comment),

    onSuccess() {
      toast.success("Comment added");

      client.invalidateQueries({
        queryKey: ["member-tasks"],
      });
    },
  });
}

export function useNotifications() {
  return useQuery({
    queryKey: ["notifications"],

    queryFn: getNotifications,
  });
}

export function useActivity() {
  return useQuery({
    queryKey: ["activity"],

    queryFn: getActivities,
  });
}
