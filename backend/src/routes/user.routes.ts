import { Router } from "express";

import {
  getUsers,
  getTeamMembers,
  createUser,
  updateUser,
  deleteUser,
  assignRole,
} from "../controllers/user.controller";

import { authenticate } from "../middlewares/auth.middleware";

import { authorize } from "../middlewares/role.middleware";


const router = Router();


router.use(authenticate);


// ===============================
// ADMIN ONLY USER MANAGEMENT
// ===============================

router.get(
  "/",
  authorize(["ADMIN"]),
  getUsers
);


router.post(
  "/",
  authorize(["ADMIN"]),
  createUser
);


router.put(
  "/:id",
  authorize(["ADMIN"]),
  updateUser
);


router.delete(
  "/:id",
  authorize(["ADMIN"]),
  deleteUser
);


router.patch(
  "/:id/role",
  authorize(["ADMIN"]),
  assignRole
);


// ===============================
// PROJECT MANAGER TEAM MEMBERS
// ===============================

router.get(
  "/team-members",
  authorize([
    "ADMIN",
    "PROJECT_MANAGER"
  ]),
  getTeamMembers
);



export default router;