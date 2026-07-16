"use client";

import { createContext, useContext, useEffect, useState } from "react";

import api from "@/services/api";

import { saveToken, removeToken, getToken } from "@/utils/token";

import { User } from "@/types/auth";

interface AuthContextType {
  user: User | null;

  loading: boolean;

  login(email: string, password: string): Promise<User>;

  register(data: any): Promise<void>;

  logout(): void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();

    const savedUser = sessionStorage.getItem("user");

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    const loggedUser = response.data.user;

    saveToken(response.data.token);

    sessionStorage.setItem("user", JSON.stringify(loggedUser));

    setUser(loggedUser);

    return loggedUser;
  };

  const register = async (data: any) => {
    await api.post("/auth/register", data);
  };

  const logout = () => {
    removeToken();

    sessionStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("AuthProvider missing");

  return context;
}
