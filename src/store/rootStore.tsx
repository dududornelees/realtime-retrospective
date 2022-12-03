import { configureStore } from "@reduxjs/toolkit";
import ideaSlice from "store/slices/ideaSlice";

export const store = configureStore({
    reducer: {
        idea: ideaSlice
    }
});
