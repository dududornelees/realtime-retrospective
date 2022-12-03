import { CardHeader } from "components";
import * as P from "./props";

export const Card = ({ idea, ideas, setIdeas }: P.Props) => {
    return (
        <div className="w-full rounded-md shadow-md p-3 bg-yellow-100 mt-4">
            <CardHeader idea={idea} ideas={ideas} setIdeas={setIdeas} />
            <p className="break-all text-sm">{idea.title}</p>
        </div>
    );
};
