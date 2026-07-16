"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const express_1 = require("express");
const errorHandler = (err, req, res, next) => {
    console.error(err);
    return res.status(err.statusCode || 500)
        .json({
        success: false,
        message: err.message ||
            "Internal Server Error"
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.middleware.js.map