import { useState, useEffect } from "react";
import { TitleCard, Card } from "components";
import { RetrospectivesService } from "services";
import * as P from "./props";

export const CardBox = ({ id, title }: P.Props) => {
    const [ideas, setIdeas] = useState<Idea[]>([]);

    const getIdeasByRetrospective = async () => {
        const res = await RetrospectivesService.getIdeasByRetrospective(id);
        setIdeas(res);
    };

    useEffect(() => {
        getIdeasByRetrospective();
    }, []);

    RetrospectivesService.observeIdeasByRetrospective(() => getIdeasByRetrospective());

    return (
        <div className="w-full h-full flex flex-col">
            <TitleCard title={title} ideas={ideas} setIdeas={setIdeas} />

            {ideas.map((idea: Idea, index) => (
                <Card key={index} idea={idea} ideas={ideas} setIdeas={setIdeas} />
            ))}
        </div>
    );
};
