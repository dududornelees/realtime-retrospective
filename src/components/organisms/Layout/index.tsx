import { Header } from "components";
import * as P from "./props";

export const Layout = ({ className, children }: P.Props) => {
    return (
        <>
            <Header />
            <main className={className}>{children}</main>
        </>
    );
};
