export declare const createProject: (data: any) => Promise<{
    manager: {
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        password: string;
        roleId: string;
    };
    tasks: {
        id: string;
        createdAt: Date;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TaskStatus;
        projectId: string;
        priority: import("@prisma/client").$Enums.TaskPriority;
        deadline: Date | null;
        updatedAt: Date;
        assignedTo: string;
        createdBy: string;
    }[];
    members: ({
        user: {
            id: string;
            name: string;
            createdAt: Date;
            email: string;
            password: string;
            roleId: string;
        };
    } & {
        id: string;
        projectId: string;
        userId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    title: string;
    description: string | null;
    status: import("@prisma/client").$Enums.ProjectStatus;
    startDate: Date | null;
    endDate: Date | null;
    managerId: string;
}>;
export declare const getProjects: () => Promise<({
    manager: {
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        password: string;
        roleId: string;
    };
    tasks: {
        id: string;
        createdAt: Date;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TaskStatus;
        projectId: string;
        priority: import("@prisma/client").$Enums.TaskPriority;
        deadline: Date | null;
        updatedAt: Date;
        assignedTo: string;
        createdBy: string;
    }[];
    members: ({
        user: {
            id: string;
            name: string;
            createdAt: Date;
            email: string;
            password: string;
            roleId: string;
        };
    } & {
        id: string;
        projectId: string;
        userId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    title: string;
    description: string | null;
    status: import("@prisma/client").$Enums.ProjectStatus;
    startDate: Date | null;
    endDate: Date | null;
    managerId: string;
})[]>;
export declare const getProject: (id: string) => Promise<({
    manager: {
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        password: string;
        roleId: string;
    };
    tasks: {
        id: string;
        createdAt: Date;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TaskStatus;
        projectId: string;
        priority: import("@prisma/client").$Enums.TaskPriority;
        deadline: Date | null;
        updatedAt: Date;
        assignedTo: string;
        createdBy: string;
    }[];
    members: ({
        user: {
            id: string;
            name: string;
            createdAt: Date;
            email: string;
            password: string;
            roleId: string;
        };
    } & {
        id: string;
        projectId: string;
        userId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    title: string;
    description: string | null;
    status: import("@prisma/client").$Enums.ProjectStatus;
    startDate: Date | null;
    endDate: Date | null;
    managerId: string;
}) | null>;
export declare const updateProject: (id: string, data: any) => Promise<({
    manager: {
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        password: string;
        roleId: string;
    };
    tasks: {
        id: string;
        createdAt: Date;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TaskStatus;
        projectId: string;
        priority: import("@prisma/client").$Enums.TaskPriority;
        deadline: Date | null;
        updatedAt: Date;
        assignedTo: string;
        createdBy: string;
    }[];
    members: ({
        user: {
            id: string;
            name: string;
            createdAt: Date;
            email: string;
            password: string;
            roleId: string;
        };
    } & {
        id: string;
        projectId: string;
        userId: string;
    })[];
} & {
    id: string;
    createdAt: Date;
    title: string;
    description: string | null;
    status: import("@prisma/client").$Enums.ProjectStatus;
    startDate: Date | null;
    endDate: Date | null;
    managerId: string;
}) | null>;
export declare const deleteProject: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    title: string;
    description: string | null;
    status: import("@prisma/client").$Enums.ProjectStatus;
    startDate: Date | null;
    endDate: Date | null;
    managerId: string;
}>;
//# sourceMappingURL=project.service.d.ts.map