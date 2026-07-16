"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, "Name must contain at least 3 characters"),
    email: zod_1.z.string().email("Invalid email"),
    password: zod_1.z.string().min(8, "Password must contain minimum 8 characters"),
    role: zod_1.z.enum(["ADMIN", "PROJECT_MANAGER", "TEAM_MEMBER"]).optional(),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
});
//# sourceMappingURL=auth.validation.js.map