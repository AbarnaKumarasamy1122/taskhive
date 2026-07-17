import prisma from "../config/prisma";

// Create Project

export const createProject = async (data: any) => {
  return await prisma.project.create({
    data: {
      title: data.title,

      description: data.description,

      status: data.status,

      startDate: data.startDate ? new Date(data.startDate) : null,

      endDate: data.endDate ? new Date(data.endDate) : null,

      managerId: data.managerId,
    },

    include: {
      manager: true,

      members: {
        include: {
          user: true,
        },
      },

      tasks: true,
    },
  });
};

// Get Projects

export const getProjects = async () => {
  return await prisma.project.findMany({
    include: {
      manager: true,

      members: {
        include: {
          user: true,
        },
      },

      tasks: true,
    },
  });
};

// Get Single Project

export const getProject = async (id: string) => {
  return await prisma.project.findUnique({
    where: {
      id,
    },

    include: {
      manager: true,

      members: {
        include: {
          user: true,
        },
      },

      tasks: true,
    },
  });
};

// Update Project

// Update Project

export const updateProject = async (id: string, data: any) => {
  const { members, startDate, endDate, ...projectData } = data;

  // Update project basic details

  const project = await prisma.project.update({
    where: {
      id,
    },

    data: {
      ...projectData,

      startDate: startDate ? new Date(startDate) : null,

      endDate: endDate ? new Date(endDate) : null,
    },
  });

  // Update members

  if (members) {
    // remove old members

    await prisma.projectMember.deleteMany({
      where: {
        projectId: id,
      },
    });

    // add new members

    if (members.length > 0) {
      await prisma.projectMember.createMany({
        data: members.map((userId: string) => ({
          projectId: id,
          userId,
        })),
      });
    }
  }

  // return updated project

  return await prisma.project.findUnique({
    where: {
      id,
    },

    include: {
      manager: true,

      members: {
        include: {
          user: true,
        },
      },

      tasks: true,
    },
  });
};

// Delete Project

export const deleteProject = async (id: string) => {
  return await prisma.$transaction(async (tx) => {
    // delete assigned members

    await tx.projectMember.deleteMany({
      where: {
        projectId: id,
      },
    });

    // delete tasks

    await tx.task.deleteMany({
      where: {
        projectId: id,
      },
    });

    // delete project

    return await tx.project.delete({
      where: {
        id,
      },
    });
  });
};
