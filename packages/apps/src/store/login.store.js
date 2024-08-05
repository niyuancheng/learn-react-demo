import { createSlice } from "@reduxjs/toolkit";

const loginReducer = createSlice({
    name: 'login-reducer',
    initialState: {
        isShowLogin: false
    },
    reducers: {
        setIsShowLogin(state, value) {
            const payload = value.payload;
            state.isShowLogin = payload;
        }
    }
})

export default loginReducer.reducer;
export const { setIsShowLogin } = loginReducer.actions;