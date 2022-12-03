import { useDispatch } from "react-redux";
import { addIdea } from "store/slices/ideaSlice";
import * as P from "./props";

export const TitleCard = ({ title }: P.Props) => {
    const dispatch = useDispatch();

    const handlEnter = (e: any) => {
        if (e.key === "Enter") {
            dispatch(addIdea(e.target.value));
        }
    };

    return (
        <div className="rounded-md shadow-sm py-4 px-6 bg-white w-full">
            <h2 className="text-xl font-semibold text-center mb-1">{title}</h2>

            <input
                type="text"
                onKeyUp={handlEnter}
                placeholder="Digite a sua ideia e pressione 'Enter'..."
                className="w-full h-8 border-b border-gray-300 px-2 py-1 text-center focus:border-primary focus:border-b-2 focus:outline-none"
            />
        </div>
    );
};
