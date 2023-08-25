import React, { createContext, useContext } from "react";

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);
type childrenType = {
  children: React.ReactNode;
};
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
