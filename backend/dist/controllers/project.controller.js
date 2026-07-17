"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.assignMembers = exports.getProjects = exports.createProject = void 0;
const express_1 = require("express");
const projectService = __importStar(require("../services/project.service"));
const prisma_1 = __importDefault(require("../config/prisma"));
// Create Project
const createProject = async (req, res) => {
    try {
        const user = req.user;
        const { members, ...projectData } = req.body;
        const project = await projectService.createProject({
            ...projectData,
            managerId: user.id,
        });
        // assign members
        if (members && members.length > 0) {
            await prisma_1.default.projectMember.createMany({
                data: members.map((memberId) => ({
                    projectId: project.id,
                    userId: memberId,
                })),
            });
        }
        res.status(201).json({
            success: true,
            data: project,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.createProject = createProject;
// Get Projects
const getProjects = async (req, res) => {
    try {
        const projects = await projectService.getProjects();
        res.json({
            success: true,
            data: projects,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.getProjects = getProjects;
// Assign Members
const assignMembers = async (req, res) => {
    try {
        const { members } = req.body;
        const projectId = req.params.id;
        await prisma_1.default.projectMember.deleteMany({
            where: {
                projectId,
            },
        });
        await prisma_1.default.projectMember.createMany({
            data: members.map((userId) => ({
                projectId,
                userId,
            })),
        });
        const project = await projectService.getProject(projectId);
        res.json({
            success: true,
            data: project,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.assignMembers = assignMembers;
// Update Project
const updateProject = async (req, res) => {
    try {
        const project = await projectService.updateProject(req.params.id, req.body);
        res.json({
            success: true,
            data: project,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.updateProject = updateProject;
// Delete Project
const deleteProject = async (req, res) => {
    await projectService.deleteProject(req.params.id);
    res.json({
        success: true,
        message: "Project deleted",
    });
};
exports.deleteProject = deleteProject;
//# sourceMappingURL=project.controller.js.map