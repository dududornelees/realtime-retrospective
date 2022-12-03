import { Input } from "components";
import { v4 as uuidv4 } from "uuid";
import * as P from "./props";

export const TitleCard = ({ title, ideas, setIdeas }: P.Props) => {
    const handleEnter = (e: any) => {
        if (e.key === "Enter") {
            setIdeas([...ideas, { id: uuidv4(), title: e.target.value, votes: 0 }]);
        }
    };

    return (
        <div className="rounded-md shadow-sm py-4 px-6 bg-white w-full">
            <h2 className="text-xl font-semibold text-center mb-1">{title}</h2>
            <Input placeholder="Digite a sua ideia e pressione 'Enter'..." onKeyUp={handleEnter} />
        </div>
    );
};
