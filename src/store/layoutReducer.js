import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideBar: {
        isOpen: false,
    },
}

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setIsOpenSideBar: (state, action) => {
            state.sideBar.isOpen = !state.sideBar.isOpen
        }
    }
})

export const { setIsOpenSideBar } = layoutSlice.actions;
export default layoutSlice.reducer;