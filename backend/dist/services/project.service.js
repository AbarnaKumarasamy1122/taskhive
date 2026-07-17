"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.getProject = exports.getProjects = exports.createProject = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
// Create Project
const createProject = async (data) => {
    return await prisma_1.default.project.create({
        data: {
            title: data.title,
            description: data.description,
            status: data.status,
            startDate: data.startDate ? new Date(data.startDate) : null,
            endDate: data.endDate ? new Date(data.endDate) : null,
            managerId: data.managerId,
        },
        include: {
            manager: true,
            members: {
                include: {
                    user: true,
                },
            },
            tasks: true,
        },
    });
};
exports.createProject = createProject;
// Get Projects
const getProjects = async () => {
    return await prisma_1.default.project.findMany({
        include: {
            manager: true,
            members: {
                include: {
                    user: true,
                },
            },
            tasks: true,
        },
    });
};
exports.getProjects = getProjects;
// Get Single Project
const getProject = async (id) => {
    return await prisma_1.default.project.findUnique({
        where: {
            id,
        },
        include: {
            manager: true,
            members: {
                include: {
                    user: true,
                },
            },
            tasks: true,
        },
    });
};
exports.getProject = getProject;
// Update Project
// Update Project
const updateProject = async (id, data) => {
    const { members, startDate, endDate, ...projectData } = data;
    // Update project basic details
    const project = await prisma_1.default.project.update({
        where: {
            id,
        },
        data: {
            ...projectData,
            startDate: startDate ? new Date(startDate) : null,
            endDate: endDate ? new Date(endDate) : null,
        },
    });
    // Update members
    if (members) {
        // remove old members
        await prisma_1.default.projectMember.deleteMany({
            where: {
                projectId: id,
            },
        });
        // add new members
        if (members.length > 0) {
            await prisma_1.default.projectMember.createMany({
                data: members.map((userId) => ({
                    projectId: id,
                    userId,
                })),
            });
        }
    }
    // return updated project
    return await prisma_1.default.project.findUnique({
        where: {
            id,
        },
        include: {
            manager: true,
            members: {
                include: {
                    user: true,
                },
            },
            tasks: true,
        },
    });
};
exports.updateProject = updateProject;
// Delete Project
const deleteProject = async (id) => {
    return await prisma_1.default.$transaction(async (tx) => {
        // delete assigned members
        await tx.projectMember.deleteMany({
            where: {
                projectId: id,
            },
        });
        // delete tasks
        await tx.task.deleteMany({
            where: {
                projectId: id,
            },
        });
        // delete project
        return await tx.project.delete({
            where: {
                id,
            },
        });
    });
};
exports.deleteProject = deleteProject;
//# sourceMappingURL=project.service.js.map