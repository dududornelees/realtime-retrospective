import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "providers";

export const CheckUserAuth = () => {
    const { logged } = useAuthContext();
    return logged ? <Outlet /> : <Navigate to="/user/auth" />;
};
