import { useEffect } from "react";
import { CardBox } from "components";
import { RetrospectivesService } from "services";

export const Retrospectives = () => {
    return (
        <main className="mx-auto px-4 flex flex-col xl:flex-row justify-center gap-4">
            <CardBox title="Continuar fazendo" />
            <CardBox title="Fazer mais" />
            <CardBox title="Fazer menos" />
            <CardBox title="Começar a fazer" />
            <CardBox title="Parar de fazer" />
        </main>
    );
};
