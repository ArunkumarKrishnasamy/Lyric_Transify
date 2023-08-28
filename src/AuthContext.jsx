import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authcontext = createContext();

export function AuthUser({ children }) {
  const [user, setUser] = useState(null);

  //  login and logout functions to set the user state
  const logout = () => {
    setUser("Translator");
    console.log("logged out");
  };
  return (
    <Authcontext.Provider value={{ user, setUser, logout }}>
      {children}
      {console.log(children)}
    </Authcontext.Provider>
  );
}
export function useAuth() {
  return useContext(Authcontext);
}
