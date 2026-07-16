export interface Role {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string | Role;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}