import { Request, Response } from "express";

import * as userService from "../services/user.service";

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getUsers();

  res.json({
    success: true,

    data: users,
  });
};

export const createUser = async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);

  res.status(201).json({
    success: true,

    data: user,
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const user = await userService.updateUser(req.params.id, req.body);

  res.json({
    success: true,

    data: user,
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  await userService.deleteUser(req.params.id);

  res.json({
    success: true,

    message: "User deleted",
  });
};

export const assignRole = async (req: Request, res: Response) => {
  const user = await userService.assignRole(
    req.params.id,

    req.body.role,
  );

  res.json({
    success: true,

    data: user,
  });
};
