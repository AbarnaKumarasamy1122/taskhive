import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  assignMember,
} from "@/services/project.service";

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],

    queryFn: getProjects,
  });
}

export function useProjectMutations() {
  const queryClient = useQueryClient();

  return {
    create: useMutation({
      mutationFn: createProject,

      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ["projects"],
        });
      },
    }),

    update: useMutation({
      mutationFn: ({
        id,

        data,
      }: any) => updateProject(id, data),

      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ["projects"],
        });
      },
    }),

    remove: useMutation({
      mutationFn: deleteProject,

      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ["projects"],
        });
      },
    }),

    assign: useMutation({
      mutationFn: ({
        projectId,

        userId,
      }: any) =>
        assignMember(
          projectId,

          userId,
        ),

      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ["projects"],
        });
      },
    }),
  };
}
