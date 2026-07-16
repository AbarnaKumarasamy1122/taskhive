"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.getProject = exports.getProjects = exports.createProject = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createProject = async (data) => {
    return await prisma_1.default.project.create({
        data
    });
};
exports.createProject = createProject;
const getProjects = async () => {
    return await prisma_1.default.project.findMany({
        include: {
            manager: true,
            members: true,
            tasks: true
        }
    });
};
exports.getProjects = getProjects;
const getProject = async (id) => {
    return await prisma_1.default.project.findUnique({
        where: {
            id
        },
        include: {
            tasks: true
        }
    });
};
exports.getProject = getProject;
const updateProject = async (id, data) => {
    return prisma_1.default.project.update({
        where: {
            id
        },
        data
    });
};
exports.updateProject = updateProject;
const deleteProject = async (id) => {
    return prisma_1.default.project.delete({
        where: {
            id
        }
    });
};
exports.deleteProject = deleteProject;
//# sourceMappingURL=project.service.js.map