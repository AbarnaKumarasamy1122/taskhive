import { Router } from "express";

import { authenticate } from "../middlewares/auth.middleware";

import { authorize } from "../middlewares/role.middleware";

import {
  createProject,
  getProjects,
  deleteProject,
  assignMembers,
  updateProject,
} from "../controllers/project.controller";

const router = Router();

// Create Project

router.post(
 "/",
 authenticate,
 authorize(["PROJECT_MANAGER"]),
 createProject
);


router.get(
 "/",
 authenticate,
 authorize(["ADMIN","PROJECT_MANAGER"]),
 getProjects
);


router.patch(
 "/:id",
 authenticate,
 authorize(["PROJECT_MANAGER"]),
 updateProject
);


router.post(
 "/:id/members",
 authenticate,
 authorize(["PROJECT_MANAGER"]),
 assignMembers
);


router.delete(
 "/:id",
 authenticate,
 authorize(["PROJECT_MANAGER"]),
 deleteProject
);

export default router;
