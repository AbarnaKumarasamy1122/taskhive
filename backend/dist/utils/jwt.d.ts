import jwt from "jsonwebtoken";
interface JwtPayload {
    id: string;
    email: string;
    role: string;
}
export declare const generateToken: (payload: JwtPayload) => never;
export declare const verifyToken: (token: string) => string | jwt.JwtPayload;
export {};
//# sourceMappingURL=jwt.d.ts.map