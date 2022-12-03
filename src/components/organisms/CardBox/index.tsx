import { useState } from "react";
import { TitleCard, Card } from "components";
import * as P from "./props";

export const CardBox = ({ title }: P.Props) => {
    const [ideas, setIdeas] = useState([]);

    return (
        <div className="w-full h-full flex flex-col">
            <TitleCard title={title} ideas={ideas} setIdeas={setIdeas} />

            {ideas.map((idea: Idea, index) => (
                <Card key={index} idea={idea} ideas={ideas} setIdeas={setIdeas} />
            ))}
        </div>
    );
};
