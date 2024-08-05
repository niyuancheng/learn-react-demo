import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./header.store";
import loginReducer from "./login.store";
export const store = configureStore({
    reducer: {
        header: headerReducer,
        login: loginReducer
    }
})
