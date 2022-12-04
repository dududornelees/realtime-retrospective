import { Navigate } from "react-router-dom";
import { AuthService } from "services/Auth";
import { useAuthContext } from "providers";

export const Login = () => {
    const { logged } = useAuthContext();

    const handleLoginWithGoogle = async () => {
        await AuthService.loginWithGoogle();
    };

    return !logged ? (
        <div>
            <button onClick={handleLoginWithGoogle}>Login com o Google</button>
        </div>
    ) : (
        <Navigate to="/user/retrospectives" />
    );
};
