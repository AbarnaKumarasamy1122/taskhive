"use client";

import { useQuery } from "@tanstack/react-query";

import { getUsers, getTeamMembers } from "@/services/user.service";

export function useUsers() {
  return useQuery({
    queryKey: ["team-members"],

    queryFn: getTeamMembers,
  });
}

export function useTeamMembers() {
  return useQuery({
    queryKey: ["team-members"],

    queryFn: getTeamMembers,
  });
}
