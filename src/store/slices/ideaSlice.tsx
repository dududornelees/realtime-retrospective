import { createSlice } from "@reduxjs/toolkit";

const initialState: IdeaSlice = {
    idea: []
};

const slice = createSlice({
    name: "idea",
    initialState,
    reducers: {
        addIdea(state, { payload }) {
            console.log(state);
            console.log(payload);
            state.idea.push(payload);
        }
    }
});

export const { addIdea } = slice.actions;
export default slice.reducer;
