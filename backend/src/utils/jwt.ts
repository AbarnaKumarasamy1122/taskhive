import jwt from "jsonwebtoken";
import { env } from "../config/env";

interface JwtPayload {
  id: string;
  email: string;
  role: string;
}

export const generateToken = (payload: JwtPayload) => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET);
};
