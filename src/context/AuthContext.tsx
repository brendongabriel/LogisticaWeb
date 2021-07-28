import React, { createContext, useCallback } from "react";
import api from "../service/api";

interface SingInCredentials {
    email: string;
    senha: string;
}

interface AuthContextData {
    user: string;
    singIn(credentials: SingInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
    const singIn = useCallback(async ({ email, senha }) => {
        const respose = await api.post("authenticate", {
            email,
            senha,
        });

        console.log(respose.data)
    }, []);

    return (
        <AuthContext.Provider value={{user: "Johnatan", singIn}}>
            {children}
        </AuthContext.Provider>
    );
}