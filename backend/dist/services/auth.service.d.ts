export declare const registerUser: (data: any) => Promise<{
    id: string;
    name: string;
    email: string;
    role: string;
}>;
export declare const loginUser: (email: string, password: string) => Promise<{
    token: never;
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
    };
}>;
//# sourceMappingURL=auth.service.d.ts.map