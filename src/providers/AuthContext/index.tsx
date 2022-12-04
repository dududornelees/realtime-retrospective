import { useState, createContext, useContext } from "react";
import { AuthService } from "services";
import * as P from "./props";

export const AuthContext = createContext<P.ContextValue>({
    logged: false,
    setLogged: () => {}
});

export const AuthContextProvider = ({ children }: P.Props) => {
    const [logged, setLogged] = useState(AuthService.isLoggedIn());
    AuthService.observeStatus((user) => setLogged(!!user));

    return <AuthContext.Provider value={{ logged, setLogged }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
