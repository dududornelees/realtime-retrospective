export const handleDelete = (idea: Idea, ideas: Idea[], setIdeas: React.Dispatch<React.SetStateAction<Idea[]>>) => {
    const newIdeas: Idea[] = ideas.filter((currentIdea) => currentIdea.id !== idea.id);
    setIdeas(newIdeas);
};

export const handleVote = (idea: Idea, ideas: Idea[], setIdeas: React.Dispatch<React.SetStateAction<Idea>>) => {};
