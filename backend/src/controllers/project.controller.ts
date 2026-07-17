import { Request, Response } from "express";

import * as projectService from "../services/project.service";

import prisma from "../config/prisma";

// Create Project

export const createProject = async (req: Request, res: Response) => {
  try {
    const user: any = req.user;

    const { members, ...projectData } = req.body;

    const project = await projectService.createProject({
      ...projectData,

      managerId: user.id,
    });

    // assign members

    if (members && members.length > 0) {
      await prisma.projectMember.createMany({
        data: members.map((memberId: string) => ({
          projectId: project.id,

          userId: memberId,
        })),
      });
    }

    res.status(201).json({
      success: true,

      data: project,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// Get Projects

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await projectService.getProjects();

    res.json({
      success: true,

      data: projects,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// Assign Members

export const assignMembers = async (req: Request, res: Response) => {
  try {
    const { members } = req.body;

    const projectId = req.params.id;

    await prisma.projectMember.deleteMany({
      where: {
        projectId,
      },
    });

    await prisma.projectMember.createMany({
      data: members.map((userId: string) => ({
        projectId,

        userId,
      })),
    });

    const project = await projectService.getProject(projectId);

    res.json({
      success: true,

      data: project,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// Update Project

export const updateProject = async (req: Request, res: Response) => {
  try {
    const project = await projectService.updateProject(req.params.id, req.body);

    res.json({
      success: true,
      data: project,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Project

export const deleteProject = async (req: Request, res: Response) => {
  await projectService.deleteProject(req.params.id);

  res.json({
    success: true,

    message: "Project deleted",
  });
};
