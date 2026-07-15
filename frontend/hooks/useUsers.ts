import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  assignRole,
} from "@/services/user.service";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],

    queryFn: getUsers,
  });
}

export function useUserMutations() {
  const queryClient = useQueryClient();

  return {
    create: useMutation({
      mutationFn: createUser,

      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      },
    }),

    update: useMutation({
      mutationFn: ({
        id,

        data,
      }: any) => updateUser(id, data),

      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      },
    }),

    remove: useMutation({
      mutationFn: deleteUser,

      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      },
    }),

    role: useMutation({
      mutationFn: ({
        id,

        role,
      }: any) => assignRole(id, role),

      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      },
    }),
  };
}
