"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const password_1 = require("../utils/password");
const jwt_1 = require("../utils/jwt");
const registerUser = async (data) => {
    const { name, email, password, role } = data;
    const existingUser = await prisma_1.default.user.findUnique({
        where: {
            email,
        },
    });
    if (existingUser) {
        throw new Error("Email already exists");
    }
    let selectedRole;
    if (role) {
        selectedRole = await prisma_1.default.role.findUnique({
            where: {
                name: role,
            },
        });
    }
    else {
        selectedRole = await prisma_1.default.role.findUnique({
            where: {
                name: "TEAM_MEMBER",
            },
        });
    }
    if (!selectedRole) {
        throw new Error("Role not found");
    }
    const hashedPassword = await (0, password_1.hashPassword)(password);
    const user = await prisma_1.default.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            roleId: selectedRole.id,
        },
        include: {
            role: true,
        },
    });
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role.name,
    };
};
exports.registerUser = registerUser;
const loginUser = async (email, password) => {
    const user = await prisma_1.default.user.findUnique({
        where: {
            email,
        },
        include: {
            role: true,
        },
    });
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const passwordMatch = await (0, password_1.comparePassword)(password, user.password);
    if (!passwordMatch) {
        throw new Error("Invalid email or password");
    }
    const token = (0, jwt_1.generateToken)({
        id: user.id,
        email: user.email,
        role: user.role.name,
    });
    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role.name,
        },
    };
};
exports.loginUser = loginUser;
//# sourceMappingURL=auth.service.js.map