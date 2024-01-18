import React from "react";
export interface AuthStateContext {
  isAuthorized: boolean;
  token?: string | null;
  getToken: () => string | null;
  setAuthorization: (token: string | undefined) => void;
  logOutHandler: () => void;
}

const AuthState = {
  isAuthorized: false,
  getToken: () => null,
  setAuthorization: () => {},
  logOutHandler: () => {},
};

const AuthContext = React.createContext<AuthStateContext>(AuthState);
export default AuthContext;
