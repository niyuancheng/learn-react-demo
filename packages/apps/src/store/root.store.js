import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./header.store";
export const store = configureStore({
    reducer: {
        header: headerReducer
    }
})
