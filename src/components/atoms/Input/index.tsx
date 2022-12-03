import * as P from "./props";

export const Input = ({ onKeyUp, placeholder }: P.Props) => {
    return (
        <input
            type="text"
            onKeyUp={onKeyUp}
            placeholder={placeholder}
            className="w-full h-8 border-b border-gray-300 px-2 py-1 text-center focus:border-primary focus:border-b-2 focus:outline-none"
        />
    );
};
