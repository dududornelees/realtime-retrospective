import { TitleCard } from "components";
import * as P from "./props";

export const CardBox = ({ title }: P.Props) => {
    return (
        <>
            <TitleCard title={title} />
        </>
    );
};
