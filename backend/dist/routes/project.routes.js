"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const router = (0, express_1.Router)();
router.post("/", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)([
    "PROJECT_MANAGER"
]), (req, res) => {
    res.json({
        message: "Project created"
    });
});
router.get("/", auth_middleware_1.authenticate, (0, role_middleware_1.authorize)([
    "ADMIN",
    "PROJECT_MANAGER"
]), (req, res) => {
    res.json({
        message: "Projects retrieved"
    });
});
exports.default = router;
//# sourceMappingURL=project.routes.js.map