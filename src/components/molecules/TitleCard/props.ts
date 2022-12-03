export type Props = {
    title: string;
    ideas: Idea[];
    setIdeas: React.Dispatch<React.SetStateAction<Idea[]>>;
};
