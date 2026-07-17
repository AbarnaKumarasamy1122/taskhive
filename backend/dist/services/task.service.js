"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComment = exports.deleteTask = exports.updateStatus = exports.getTasks = exports.createTask = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
// Create Task
const createTask = async (data) => {
    return await prisma_1.default.task.create({
        data: {
            title: data.title,
            description: data.description,
            priority: data.priority,
            deadline: data.deadline ? new Date(data.deadline) : null,
            projectId: data.projectId,
            assignedTo: data.assignedTo,
            createdBy: data.createdBy,
        },
        include: {
            assignee: true,
            creator: true,
            project: true,
        },
    });
};
exports.createTask = createTask;
// Get Tasks
const getTasks = async (user) => {
    if (user.role === "TEAM_MEMBER") {
        return await prisma_1.default.task.findMany({
            where: {
                assignedTo: user.id,
            },
            include: {
                assignee: true,
                creator: true,
                comments: {
                    include: {
                        user: true,
                    },
                },
            },
        });
    }
    return await prisma_1.default.task.findMany({
        where: {
            creatorId: user.id,
        },
        include: {
            assignee: true,
            creator: true,
            project: true,
            comments: {
                include: {
                    user: true,
                },
            },
        },
    });
};
exports.getTasks = getTasks;
// Update Status
const updateStatus = async (id, status) => {
    return await prisma_1.default.task.update({
        where: {
            id,
        },
        data: {
            status: status,
        },
    });
};
exports.updateStatus = updateStatus;
// Delete Task
const deleteTask = async (id) => {
    return prisma_1.default.task.delete({
        where: {
            id,
        },
    });
};
exports.deleteTask = deleteTask;
// Add Comment
const addComment = async (taskId, userId, comment) => {
    return prisma_1.default.comment.create({
        data: {
            taskId,
            userId,
            comment,
        },
        include: {
            user: true,
        },
    });
};
exports.addComment = addComment;
//# sourceMappingURL=task.service.js.map