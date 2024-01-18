"use client";
import Auth from "@/api/Auth";
import React, { ReactNode, useEffect, useState } from "react";
import AuthContext, { AuthStateContext } from "../globalContext/authContext";

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [tokenToString, setToken] = useState<string | null>(null);

  const setAuthorization = (token: string | undefined) => {
    if (typeof window !== undefined && token) {
      localStorage.setItem("token", token);
      setToken(token);
      Auth.setAuthorized();
      setIsAuthorized(true);
    }
  };

  const logOutHandler = () => {
    if (typeof window !== undefined) {
      localStorage.removeItem("token");
      Auth.logout();
      setIsAuthorized(false);
    }
  };

  const getToken = () => {
    if (typeof window !== undefined) {
      return localStorage.getItem("token");
    }
    return null;
  };
  useEffect(() => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        setIsAuthorized(true);
        Auth.setAuthorized();
      }
    }
  }, []);

  const AuthContextValue: AuthStateContext = {
    isAuthorized: isAuthorized,
    token: tokenToString,
    setAuthorization: setAuthorization,
    logOutHandler,
    getToken,
  };

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
