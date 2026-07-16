import { Router } from "express";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  assignRole,
} from "../controllers/user.controller";

import { authenticate } from "../middlewares/auth.middleware";

import { authorize } from "../middlewares/role.middleware";

const router = Router();

router.use(authenticate);

router.use(authorize(["ADMIN"]));

router.get("/", getUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.patch("/:id/role", assignRole);

export default router;
