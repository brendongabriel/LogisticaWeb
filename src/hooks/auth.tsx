import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../service/api";

interface AuthState {
  jwt: string;
}

interface SignInCredentials {
  email: string;
  senha: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const jwt = localStorage.getItem("@Logistica:token");

    if (jwt) {
      return { jwt };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, senha }) => {
    const respose = await api.post("authenticate", {
      email,
      senha,
    });

    const { jwt } = respose.data;

    localStorage.setItem("@Logistica:token", jwt);
    setData(jwt);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Logistica:token");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used withing an AuthProvider");
  }

  return context;
}
