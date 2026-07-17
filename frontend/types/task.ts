export interface Task {
  id: string;

  title: string;

  description?: string;

  priority: "LOW" | "MEDIUM" | "HIGH";

  status: "TODO" | "IN_PROGRESS" | "COMPLETED";

  deadline?: string | null;

  project: {
    id: string;
    title: string;
  };

  assignee: {
    id: string;
    name: string;
    email: string;
  };

  creator: {
    id: string;
    name: string;
  };

  comments: any[];

  createdAt: string;
}
