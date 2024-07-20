import { createSlice } from "@reduxjs/toolkit";
const rootSlice = createSlice({
    name: 'rootStore',
    initialState: {
        count: 0,
        isLogin: false,
    },
    reducers: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
        }
    }
});

export const {increment, decrement, login, logout } = rootSlice.actions;
export default rootSlice.reducer;