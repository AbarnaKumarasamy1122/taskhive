export type ProjectStatus =
  | "PLANNING"
  | "ACTIVE"
  | "ON_HOLD"
  | "COMPLETED";


export interface User {
  id: string;
  name: string;
  email?: string;
}


export interface ProjectMember {
  id: string;

  userId: string;

  projectId: string;

  user: User;
}


export interface Task {
  id: string;

  title: string;

  description: string;

  status:
    | "TODO"
    | "IN_PROGRESS"
    | "COMPLETED";

  priority:
    | "LOW"
    | "MEDIUM"
    | "HIGH";

  assignedTo: string;

  createdBy: string;

  deadline?: string | null;
}


export interface Project {

  id: string;

  title: string;

  description: string;

  status: ProjectStatus;


  startDate:
    | string
    | null;


  endDate:
    | string
    | null;


  manager: User;


  members: ProjectMember[];


  tasks: Task[];


  createdAt: string;
}