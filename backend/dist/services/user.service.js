"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignRole = exports.deleteUser = exports.updateUser = exports.createUser = exports.getTeamMembers = exports.getUsers = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const password_1 = require("../utils/password");
const getUsers = async () => {
    return prisma_1.default.user.findMany({
        include: {
            role: true,
        },
    });
};
exports.getUsers = getUsers;
const getTeamMembers = async () => {
    return prisma_1.default.user.findMany({
        where: {
            role: {
                name: "TEAM_MEMBER",
            },
        },
        include: {
            role: true,
        },
    });
};
exports.getTeamMembers = getTeamMembers;
const createUser = async (data) => {
    const { name, email, password, role } = data;
    const roleData = await prisma_1.default.role.findUnique({
        where: {
            name: role,
        },
    });
    if (!roleData)
        throw new Error("Role not found");
    const hashedPassword = await (0, password_1.hashPassword)(password);
    return prisma_1.default.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            roleId: roleData.id,
        },
        include: {
            role: true,
        },
    });
};
exports.createUser = createUser;
const updateUser = async (id, data) => {
    return prisma_1.default.user.update({
        where: {
            id,
        },
        data,
    });
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    return prisma_1.default.user.delete({
        where: {
            id,
        },
    });
};
exports.deleteUser = deleteUser;
const assignRole = async (id, roleName) => {
    const role = await prisma_1.default.role.findUnique({
        where: {
            name: roleName,
        },
    });
    if (!role)
        throw new Error("Role not found");
    return prisma_1.default.user.update({
        where: {
            id,
        },
        data: {
            roleId: role.id,
        },
    });
};
exports.assignRole = assignRole;
//# sourceMappingURL=user.service.js.map