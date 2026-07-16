export declare const createProject: (data: any) => Promise<{
    id: string;
    createdAt: Date;
    title: string;
    description: string;
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
        description: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        priority: import("@prisma/client").$Enums.TaskPriority;
        deadline: Date | null;
        projectId: string;
        assignedTo: string;
        createdBy: string;
    }[];
    members: {
        id: string;
        projectId: string;
        userId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    title: string;
    description: string;
    status: import("@prisma/client").$Enums.ProjectStatus;
    startDate: Date | null;
    endDate: Date | null;
    managerId: string;
})[]>;
export declare const getProject: (id: string) => Promise<({
    tasks: {
        id: string;
        createdAt: Date;
        title: string;
        description: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        priority: import("@prisma/client").$Enums.TaskPriority;
        deadline: Date | null;
        projectId: string;
        assignedTo: string;
        createdBy: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    title: string;
    description: string;
    status: import("@prisma/client").$Enums.ProjectStatus;
    startDate: Date | null;
    endDate: Date | null;
    managerId: string;
}) | null>;
export declare const updateProject: (id: string, data: any) => Promise<{
    id: string;
    createdAt: Date;
    title: string;
    description: string;
    status: import("@prisma/client").$Enums.ProjectStatus;
    startDate: Date | null;
    endDate: Date | null;
    managerId: string;
}>;
export declare const deleteProject: (id: string) => Promise<{
    id: string;
    createdAt: Date;
    title: string;
    description: string;
    status: import("@prisma/client").$Enums.ProjectStatus;
    startDate: Date | null;
    endDate: Date | null;
    managerId: string;
}>;
//# sourceMappingURL=project.service.d.ts.map