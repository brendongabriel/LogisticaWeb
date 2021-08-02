// create context biblioteca que vai criar o contexto para receber dados
import React, { createContext, useCallback, useState } from "react";
import api from "../service/api";

// criando interface pra armazenar os dados do token
interface AuthState {
    jwt: string;
}

// tipos de dados das credenciais que serao recebidos para poderem serem validados
interface SignInCredentials {
    email: string;
    senha: string;
};

// tipos de dados que o metodo auto context vai receber para tratar
interface AuthContextData { 
    // criando um parametro e renomeando para ser do tipo Signincredentials depois do dois pontos
    signIn(credentials: SignInCredentials): Promise<void>;
};

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

// vai receber as credenciais da rota de autenticacao
export const AuthProvider: React.FC = ({ children }) => {
    //instancia pra armazenar em cash
    const [data, setData] = useState<AuthState>(() => {
        const jwt = localStorage.getItem("@Logistica:token");

        if (jwt) {
            return { jwt };
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, senha}) => {
        const respose = await api.post("authenticate", {
            email,
            senha,
        });

        console.log(respose.data)
        // pegando os dados que esta retornando no respose quando loga
        const { jwt } = respose.data;

        // armazenando em memoria cash com o nome e o token pegado no respose
        localStorage.setItem("@Logistica:token", jwt);
        setData(jwt);
    }, []);
    
    return(
      <AuthContext.Provider value={{signIn}}>
          {children}
      </AuthContext.Provider>  
    );
};