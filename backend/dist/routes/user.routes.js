"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
// ===============================
// ADMIN ONLY USER MANAGEMENT
// ===============================
router.get("/", (0, role_middleware_1.authorize)(["ADMIN"]), user_controller_1.getUsers);
router.post("/", (0, role_middleware_1.authorize)(["ADMIN"]), user_controller_1.createUser);
router.put("/:id", (0, role_middleware_1.authorize)(["ADMIN"]), user_controller_1.updateUser);
router.delete("/:id", (0, role_middleware_1.authorize)(["ADMIN"]), user_controller_1.deleteUser);
router.patch("/:id/role", (0, role_middleware_1.authorize)(["ADMIN"]), user_controller_1.assignRole);
// ===============================
// PROJECT MANAGER TEAM MEMBERS
// ===============================
router.get("/team-members", (0, role_middleware_1.authorize)([
    "ADMIN",
    "PROJECT_MANAGER"
]), user_controller_1.getTeamMembers);
exports.default = router;
//# sourceMappingURL=user.routes.js.map