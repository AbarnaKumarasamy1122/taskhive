import { Router } from "express";

import {
  createTask,
  getTasks,
  updateTaskStatus,
  deleteTask,
  addComment,
} from "../controllers/task.controller";

import { authenticate } from "../middlewares/auth.middleware";

import { authorize } from "../middlewares/role.middleware";

const router = Router();

// Get tasks

router.get(
  "/",
  authenticate,
  authorize(["PROJECT_MANAGER", "TEAM_MEMBER"]),
  getTasks,
);

// Create task

router.post("/", authenticate, authorize(["PROJECT_MANAGER"]), createTask);

// Update status

router.patch(
  "/:id/status",
  authenticate,
  authorize(["TEAM_MEMBER", "PROJECT_MANAGER"]),
  updateTaskStatus,
);

// Delete

router.delete("/:id", authenticate, authorize(["PROJECT_MANAGER"]), deleteTask);

// Comments

router.post("/:id/comments", authenticate, addComment);

export default router;
