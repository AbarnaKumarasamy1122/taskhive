"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
router.use((0, role_middleware_1.authorize)(["ADMIN"]));
router.get("/", user_controller_1.getUsers);
router.post("/", user_controller_1.createUser);
router.put("/:id", user_controller_1.updateUser);
router.delete("/:id", user_controller_1.deleteUser);
router.patch("/:id/role", user_controller_1.assignRole);
exports.default = router;
//# sourceMappingURL=user.routes.js.map