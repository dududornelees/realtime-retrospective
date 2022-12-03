import { FaTimes } from "react-icons/fa";
import * as P from "./props";

export const Card = ({ idea }: P.Props) => {
    return (
        <div className="w-full rounded-md shadow-sm py-4 px-6 bg-yellow-100 mt-4 relative">
            <p>{idea.title}</p>
            <FaTimes className="absolute top-3 right-3" />
        </div>
    );
};
