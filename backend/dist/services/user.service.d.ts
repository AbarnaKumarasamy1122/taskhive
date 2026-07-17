export declare const getUsers: () => Promise<({
    role: {
        id: string;
        name: string;
        createdAt: Date;
    };
} & {
    id: string;
    name: string;
    createdAt: Date;
    email: string;
    password: string;
    roleId: string;
})[]>;
export declare const getTeamMembers: () => Promise<({
    role: {
        id: string;
        name: string;
        createdAt: Date;
    };
} & {
    id: string;
    name: string;
    createdAt: Date;
    email: string;
    password: string;
    roleId: string;
})[]>;
export declare const createUser: (data: any) => Promise<{
    role: {
        id: string;
        name: string;
        createdAt: Date;
    };
} & {
    id: string;
    name: string;
    createdAt: Date;
    email: string;
    password: string;
    roleId: string;
}>;
export declare const updateUser: (id: string, data: any) => Promise<{
    id: string;
    name: string;
    createdAt: Date;
    email: string;
    password: string;
    roleId: string;
}>;
export declare const deleteUser: (id: string) => Promise<{
    id: string;
    name: string;
    createdAt: Date;
    email: string;
    password: string;
    roleId: string;
}>;
export declare const assignRole: (id: string, roleName: string) => Promise<{
    id: string;
    name: string;
    createdAt: Date;
    email: string;
    password: string;
    roleId: string;
}>;
//# sourceMappingURL=user.service.d.ts.map