import { useState, useEffect } from "react";
import { CardBox } from "components";
import { RetrospectivesService } from "services";

export const Retrospectives = () => {
    const [retroCards, setRetroCards] = useState<RetrospectiveCard[]>([]);

    useEffect(() => {
        const getRetrospectivesCard = async () => {
            const res = await RetrospectivesService.getRetrospectivesCard();
            setRetroCards(res);
        };

        getRetrospectivesCard();
    }, []);

    return (
        <main className="mx-auto px-4 flex flex-col xl:flex-row justify-center gap-4 mt-4">
            {retroCards.map((retro: RetrospectiveCard) => (
                <CardBox key={retro.id} id={retro.id} title={retro.title} />
            ))}
        </main>
    );
};
