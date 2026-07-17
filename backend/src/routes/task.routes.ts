import { Router } from "express";

import { authenticate } from "../middlewares/auth.middleware";

import { authorize } from "../middlewares/role.middleware";

const router = Router();

router.get(
  "/",

  authenticate,

  authorize(["PROJECT_MANAGER", "TEAM_MEMBER"]),

  (req, res) => {
    res.json({
      message: "Tasks retrieved",
    });
  },
);

router.put(
  "/:id/status",

  authenticate,

  authorize(["TEAM_MEMBER"]),

  (req, res) => {
    res.json({
      message: "Task status updated",
    });
  },
);

export default router;
