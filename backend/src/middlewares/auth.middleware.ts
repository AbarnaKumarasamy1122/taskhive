import { Request, Response, NextFunction } from "express";

import { verifyToken } from "../utils/jwt";

export const authenticate = (
  req: Request,

  res: Response,

  next: NextFunction,
) => {
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

    const decoded: any = verifyToken(token);

    req.user = {
      id: decoded.id,

      email: decoded.email,

      role: decoded.role,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,

      message: "Invalid or expired token",
    });
  }
};
