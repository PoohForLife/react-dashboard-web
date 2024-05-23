import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favItem: [],
}

const favReducer = createSlice({
    name: 'favItem',
    initialState,
    reducers: {
        addFavItem: (state, action) => {
            state.favItem.push(action.payload);
        },
        resetFavItem: (state) => {
            state.favItem = [];
        },
    }
})

export const { resetFavItem } = favReducer.actions
export const { addFavItem } = favReducer.actions

export default favReducer.reducer