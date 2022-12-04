import { Routes } from "routes";
import { AuthContextProvider } from "providers";

export const App = () => {
    return (
        <AuthContextProvider>
            <Routes />
        </AuthContextProvider>
    );
};
