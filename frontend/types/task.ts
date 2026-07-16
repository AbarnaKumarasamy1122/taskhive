export type TaskStatus = "TODO" | "IN_PROGRESS" | "COMPLETED";

export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";

export interface Task {
  id: string;

  title: string;

  description: string;

  priority: TaskPriority;

  status: TaskStatus;

  deadline: string | null;

  projectId: string;

  assignee: {
    id: string;
    name: string;
  };

  creator: {
    id: string;
    name: string;
  };

  comments: any[];
}
