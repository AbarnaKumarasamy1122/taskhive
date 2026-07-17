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
exports.assignRole = exports.deleteUser = exports.updateUser = exports.createUser = exports.getTeamMembers = exports.getUsers = void 0;
const express_1 = require("express");
const userService = __importStar(require("../services/user.service"));
const getUsers = async (req, res) => {
    const users = await userService.getUsers();
    res.json({
        success: true,
        data: users,
    });
};
exports.getUsers = getUsers;
const getTeamMembers = async (req, res) => {
    const users = await userService.getTeamMembers();
    res.json({
        success: true,
        data: users,
    });
};
exports.getTeamMembers = getTeamMembers;
const createUser = async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(201).json({
        success: true,
        data: user,
    });
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json({
        success: true,
        data: user,
    });
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    res.json({
        success: true,
        message: "User deleted",
    });
};
exports.deleteUser = deleteUser;
const assignRole = async (req, res) => {
    const user = await userService.assignRole(req.params.id, req.body.role);
    res.json({
        success: true,
        data: user,
    });
};
exports.assignRole = assignRole;
//# sourceMappingURL=user.controller.js.map