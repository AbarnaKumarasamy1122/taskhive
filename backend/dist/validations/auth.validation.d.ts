import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodOptional<z.ZodEnum<{
        ADMIN: "ADMIN";
        PROJECT_MANAGER: "PROJECT_MANAGER";
        TEAM_MEMBER: "TEAM_MEMBER";
    }>>;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=auth.validation.d.ts.map