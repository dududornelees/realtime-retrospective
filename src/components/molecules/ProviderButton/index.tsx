import { FcGoogle } from "react-icons/fc";
import * as P from "./props";

export const ProviderButton = ({ provider, onClick }: P.Props) => {
    return provider === "Google" ? (
        <button
            onClick={onClick}
            className="shadow-md rounded-full bg-white w-full h-14 flex justify-center items-center text-md font-semibold"
        >
            <FcGoogle className="mr-3 w-6 h-6" />
            Continuar com o Google
        </button>
    ) : null;
};
