import { useQuery } from "@tanstack/react-query";

import { getMyProjects } from "@/services/member.service";

export function useMyProjects() {
  return useQuery({
    queryKey: ["my-projects"],

    queryFn: getMyProjects,
  });
}
