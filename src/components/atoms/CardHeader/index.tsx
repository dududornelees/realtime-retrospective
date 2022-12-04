import { FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import { handleDelete, handleVote } from "helpers";
import * as P from "./props";

export const CardHeader = ({ idea, ideas, setIdeas }: P.Props) => {
    return (
        <div className="flex justify-between items-center mb-2">
            <h6 className="text-xs">{idea.author}</h6>

            <div className="flex gap-1.5">
                <FaTrashAlt
                    onClick={() => handleDelete(idea, ideas, setIdeas)}
                    className="cursor-pointer text-secondary w-3.5 h-3.5 hover:text-secondaryDark transition-all"
                />

                <FaPlusCircle
                    onClick={() => handleVote(idea, ideas, setIdeas)}
                    className="cursor-pointer text-secondary w-3.5 h-3.5 hover:text-secondaryDark transition-all"
                />
            </div>
        </div>
    );
};
