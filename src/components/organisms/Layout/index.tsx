import { Header } from "components";
import * as P from "./props";

export const Layout = ({ children }: P.Props) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
