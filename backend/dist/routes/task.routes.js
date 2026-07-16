"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const router = (0, express_1.Router)();
router.get("/", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)([
    "PROJECT_MANAGER",
    "TEAM_MEMBER"
]), (req, res) => {
    res.json({
        message: "Tasks retrieved"
    });
});
router.put("/:id/status", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)([
    "TEAM_MEMBER"
]), (req, res) => {
    res.json({
        message: "Task status updated"
    });
});
exports.default = router;
//# sourceMappingURL=task.routes.js.map