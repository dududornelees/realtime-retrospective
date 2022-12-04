import { Navigate } from "react-router-dom";
import { LoginForm } from "components";
import { useAuthContext } from "providers";

export const Login = () => {
    const { logged } = useAuthContext();

    return !logged ? (
        <main className="h-[calc(100vh-4rem)] flex justify-center items-center">
            <LoginForm />
        </main>
    ) : (
        <Navigate to="/user/retrospectives" />
    );
};
