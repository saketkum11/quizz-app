import React, { createContext, useContext } from "react";
import { childrenType } from "../Firebase/allTypes";

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: childrenType) => {
  const createNewAccount = () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
