import { AuthService } from "services";
import { useAuthContext } from "providers";

export const Header = () => {
    const { logged } = useAuthContext();

    return (
        <header
            className={`h-16 bg-primary flex items-center px-4 shadow-md ${
                logged ? "justify-between" : "justify-center"
            }`}
        >
            {logged && <div className="w-16" />}

            <h1 className="text-white text-xl font-semibold">Retrospectiva</h1>

            {logged && (
                <button
                    onClick={() => AuthService.logout()}
                    className="h-8 w-16 rounded-md text-white shadow-md bg-red-700"
                >
                    Sair
                </button>
            )}
        </header>
    );
};
