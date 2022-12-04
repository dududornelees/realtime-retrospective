import { SetStateAction } from "react";

export type Props = {
    children: JSX.Element;
};

export type ContextValue = {
    logged: boolean;
    setLogged: React.Dispatch<SetStateAction<boolean>>;
};
