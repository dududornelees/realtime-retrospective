import { ProviderButton } from "components";
import { AuthService } from "services";

export const LoginForm = () => {
    const handleLogin = async () => {
        await AuthService.loginWithGoogle();
    };

    return (
        <div className="flex flex-col justify-center items-center w-96">
            <ProviderButton onClick={handleLogin} provider="Google" />
        </div>
    );
};
