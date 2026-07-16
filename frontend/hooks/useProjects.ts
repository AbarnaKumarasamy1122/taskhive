"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  assignMembers,
} from "@/services/project.service";

import toast from "react-hot-toast";

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
  });

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      updateProject(id, data),

    onSuccess() {
      toast.success("Project updated");

      client.invalidateQueries({
        queryKey: ["projects"],
      });
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
  });

  const assign = useMutation({
    mutationFn: ({
      projectId,
      members,
    }: {
      projectId: string;
      members: string[];
    }) => assignMembers(projectId, members),

    onSuccess() {
      toast.success("Members assigned");

      client.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });

  return {
    create,

    update,

    remove,

    assign,
  };
}
