import { createSlice } from "@reduxjs/toolkit";
const headerState = [
    {
        content: '首 页',
        active: true,
        link: '/home',
        id: 1,
    },
    { 
        content: '角 色',
        active: false,
        link: '/role',
        id: 2
    },
    {
        content: '新 闻',
        active: false,
        link: '/news',
        id: 3
    },
    {
        content: '世界',
        active: false,
        link: '/world',
        id: 4,
    }
]
const headerReducer = createSlice({
    name: 'header-store',
    initialState: {
        header: headerState
    },
    reducers: {
        changeActive(state, value) {
            const id = value.payload;
            state.header.forEach((item, index) => {
                if (item.id === id) {
                    item.active = true;
                } else {
                    item.active = false;
                }
            });
        }
    }
});

export default headerReducer.reducer;
export const { changeActive } = headerReducer.actions;