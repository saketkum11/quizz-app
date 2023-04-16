import { createContext, useContext } from "react";
const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  return (
    <AuthContext.Provider value={{ initialState }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
