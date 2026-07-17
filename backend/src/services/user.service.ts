import prisma from "../config/prisma";

import { hashPassword } from "../utils/password";

export const getUsers = async () => {
  return prisma.user.findMany({
    include: {
      role: true,
    },
  });
};

export const getTeamMembers = async () => {
  return prisma.user.findMany({
    where: {
      role: {
        name: "TEAM_MEMBER",
      },
    },

    include: {
      role: true,
    },
  });
};

export const createUser = async (data: any) => {
  const { name, email, password, role } = data;

  const roleData = await prisma.role.findUnique({
    where: {
      name: role,
    },
  });

  if (!roleData) throw new Error("Role not found");

  const hashedPassword = await hashPassword(password);

  return prisma.user.create({
    data: {
      name,

      email,

      password: hashedPassword,

      roleId: roleData.id,
    },

    include: {
      role: true,
    },
  });
};

export const updateUser = async (id: string, data: any) => {
  return prisma.user.update({
    where: {
      id,
    },

    data,
  });
};

export const deleteUser = async (id: string) => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};

export const assignRole = async (id: string, roleName: string) => {
  const role = await prisma.role.findUnique({
    where: {
      name: roleName,
    },
  });

  if (!role) throw new Error("Role not found");

  return prisma.user.update({
    where: {
      id,
    },

    data: {
      roleId: role.id,
    },
  });
};
