import prisma from "../config/prisma";

// Get Tasks

export const getTasks = async () => {
  return await prisma.task.findMany({
    include: {
      project: true,

      assignee: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },

      creator: {
        select: {
          id: true,
          name: true,
        },
      },

      comments: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
};

// Create Task

export const createTask = async (data: any, userId: string) => {
  return await prisma.task.create({
    data: {
      title: data.title,

      description: data.description,

      priority: data.priority,

      deadline: data.deadline ? new Date(data.deadline) : null,

      projectId: data.projectId,

      assignedTo: data.assignedTo,

      createdBy: userId,
    },

    include: {
      assignee: true,
      project: true,
    },
  });
};

// Update Status

export const updateTaskStatus = async (id: string, status: any) => {
  return await prisma.task.update({
    where: {
      id,
    },

    data: {
      status,
    },
  });
};

// Delete Task

export const deleteTask = async (id: string) => {
  return await prisma.task.delete({
    where: {
      id,
    },
  });
};

// Add Comment

export const addComment = async (
  taskId: string,
  userId: string,
  comment: string,
) => {
  return prisma.comment.create({
    data: {
      taskId,
      userId,
      comment,
    },

    include: {
      user: true,
    },
  });
};
