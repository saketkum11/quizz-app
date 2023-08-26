import React, { createContext, useContext } from "react";
import { childrenTypes } from "../allTypes/allType";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { SignUpTypes } from "../allTypes/formTypes";

const AuthContext = createContext({}:);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: childrenTypes) => {
  const createNewAccount = async ({ email, password }: SignUpTypes) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthContext.Provider value={{ createNewAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
