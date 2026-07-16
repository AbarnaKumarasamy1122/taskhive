"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const express_1 = require("express");
const jwt_1 = require("../utils/jwt");
const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Authorization token missing",
            });
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Invalid token format",
            });
        }
        const decoded = (0, jwt_1.verifyToken)(token);
        req.user = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role,
        };
        next();
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=auth.middleware.js.map