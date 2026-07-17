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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComment = exports.deleteTask = exports.updateStatus = exports.getTasks = exports.createTask = void 0;
const express_1 = require("express");
const taskService = __importStar(require("../services/task.service"));
// Create Task
const createTask = async (req, res) => {
    try {
        const user = req.user;
        const task = await taskService.createTask({
            ...req.body,
            createdBy: user.id,
        });
        res.status(201).json({
            success: true,
            data: task,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.createTask = createTask;
// Get Tasks
const getTasks = async (req, res) => {
    try {
        const user = req.user;
        const tasks = await taskService.getTasks(user);
        res.json({
            success: true,
            data: tasks,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.getTasks = getTasks;
// Update status
const updateStatus = async (req, res) => {
    try {
        const task = await taskService.updateStatus(req.params.id, req.body.status);
        res.json({
            success: true,
            data: task,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.updateStatus = updateStatus;
// Delete
const deleteTask = async (req, res) => {
    try {
        await taskService.deleteTask(req.params.id);
        res.json({
            success: true,
            message: "Task deleted",
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.deleteTask = deleteTask;
// Comment
const addComment = async (req, res) => {
    try {
        const user = req.user;
        const comment = await taskService.addComment(req.params.id, user.id, req.body.comment);
        res.json({
            success: true,
            data: comment,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
exports.addComment = addComment;
//# sourceMappingURL=task.controller.js.map