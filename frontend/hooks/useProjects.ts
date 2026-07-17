"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  assignMembers,
} from "@/services/project.service";

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
}

export function useProjectMutations() {
  const client = useQueryClient();

  const create = useMutation({
    mutationFn: createProject,

    onSuccess() {
      toast.success("Project created");

      client.invalidateQueries({
        queryKey: ["projects"],
      });
    },

    onError(error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Failed to create project"
      );
    },
  });

  const update = useMutation({
    mutationFn: updateProject,

    onSuccess() {
      toast.success("Project updated");

      client.invalidateQueries({
        queryKey: ["projects"],
      });
    },

    onError(error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Failed to update project"
      );
    },
  });

  const remove = useMutation({
    mutationFn: deleteProject,

    onSuccess() {
      toast.success("Project deleted");

      client.invalidateQueries({
        queryKey: ["projects"],
      });
    },

    onError(error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Failed to delete project"
      );
    },
  });

  const assign = useMutation({
    mutationFn: assignMembers,

    onSuccess() {
      toast.success("Members assigned");

      client.invalidateQueries({
        queryKey: ["projects"],
      });
    },

    onError(error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Failed to assign members"
      );
    },
  });

  return {
    create,
    update,
    remove,
    assign,
  };
}