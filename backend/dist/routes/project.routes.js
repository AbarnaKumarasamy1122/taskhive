"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const project_controller_1 = require("../controllers/project.controller");
const router = (0, express_1.Router)();
// Create Project
router.post("/", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)(["PROJECT_MANAGER"]), project_controller_1.createProject);
router.get("/", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)(["ADMIN", "PROJECT_MANAGER"]), project_controller_1.getProjects);
router.patch("/:id", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)(["PROJECT_MANAGER"]), project_controller_1.updateProject);
router.post("/:id/members", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)(["PROJECT_MANAGER"]), project_controller_1.assignMembers);
router.delete("/:id", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)(["PROJECT_MANAGER"]), project_controller_1.deleteProject);
exports.default = router;
//# sourceMappingURL=project.routes.js.map