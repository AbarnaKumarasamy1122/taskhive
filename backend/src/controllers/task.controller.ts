import { Request, Response } from "express";

import * as taskService from "../services/task.service";

// Get Tasks

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getTasks();

    res.json({
      success: true,
      data: tasks,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// Create Task

export const createTask = async (req: Request, res: Response) => {
  try {
    const user: any = req.user;

    const task = await taskService.createTask(req.body, user.id);

    res.status(201).json({
      success: true,

      data: task,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// Update status

export const updateTaskStatus = async (req: Request, res: Response) => {
  try {
    const task = await taskService.updateTaskStatus(
      req.params.id,

      req.body.status,
    );

    res.json({
      success: true,

      data: task,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete

export const deleteTask = async (req: Request, res: Response) => {
  try {
    await taskService.deleteTask(req.params.id);

    res.json({
      success: true,

      message: "Task deleted",
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Comment

export const addComment = async (req: Request, res: Response) => {
  try {
    const user: any = req.user;

    const comment = await taskService.addComment(
      req.params.id,

      user.id,

      req.body.comment,
    );

    res.json({
      success: true,

      data: comment,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};
