"use client";

import { createContext, useContext, useEffect, useState } from "react";

import api from "@/services/api";

import { saveToken, removeToken, getToken } from "@/utils/token";

import { User } from "@/types/auth";

interface AuthContextType {
  user: User | null;

  loading: boolean;

  login: (email: string, password: string) => Promise<void>;

  register: (data: any) => Promise<void>;

  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = getToken();

      if (token) {
        try {
          const response = await api.get("/auth/profile");

          setUser(response.data.user);
        } catch (error) {
          removeToken();
        }
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  const login = async (
    email: string,

    password: string,
  ) => {
    const response = await api.post("/auth/login", {
      email,

      password,
    });

    saveToken(response.data.token);

    localStorage.setItem(
      "user",

      JSON.stringify(response.data.user),
    );

    setUser(response.data.user);
  };

  const register = async (data: any) => {
    await api.post(
      "/auth/register",

      data,
    );
  };

  const logout = () => {
    removeToken();

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

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("AuthProvider missing");

  return context;
};
