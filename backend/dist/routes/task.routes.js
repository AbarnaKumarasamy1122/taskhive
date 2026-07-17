"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const task_controller_1 = require("../controllers/task.controller");
const router = (0, express_1.Router)();
// Get Tasks
router.get("/", auth_middleware_1.authenticate, task_controller_1.getTasks);
// Create Task
router.post("/", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)(["PROJECT_MANAGER"]), task_controller_1.createTask);
// Update Status
router.patch("/:id/status", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)(["TEAM_MEMBER", "PROJECT_MANAGER"]), task_controller_1.updateStatus);
// Delete
router.delete("/:id", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)(["PROJECT_MANAGER"]), task_controller_1.deleteTask);
// Comments
router.post("/:id/comments", auth_middleware_1.authenticate, task_controller_1.addComment);
exports.default = router;
//# sourceMappingURL=task.routes.js.map