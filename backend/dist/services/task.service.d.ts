export declare const createTask: (data: any) => Promise<{
    project: {
        id: string;
        createdAt: Date;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.ProjectStatus;
        startDate: Date | null;
        endDate: Date | null;
        managerId: string;
    };
    assignee: {
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        password: string;
        roleId: string;
    };
    creator: {
        id: string;
        name: string;
        createdAt: Date;
        email: string;
        password: string;
        roleId: string;
    };
} & {
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
}>;
export declare const getTasks: (user: any) => Promise<{
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
}[]>;
export declare const updateStatus: (id: string, status: string) => Promise<{
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
}>;
export declare const deleteTask: (id: string) => Promise<{
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
}>;
export declare const addComment: (taskId: string, userId: string, comment: string) => Promise<{
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
    createdAt: Date;
    comment: string;
    userId: string;
    taskId: string;
}>;
//# sourceMappingURL=task.service.d.ts.map