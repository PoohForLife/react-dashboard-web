import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favItem: [
        {
            name: '',
            url: '',
        },
    ],
}

const favReducer = createSlice({
    name: 'favItem',
    initialState,
    reducers: {
        setFavItem: (state, action) => {
            state.favItem = action.payload;
        },
        addFavItem: (state, action) => {
            state.favItem.push({
                name: '',
                url: '',
            });
            console.log(state.favItem);
        },
        getFavItem: (state, action) => {
            return state.favItem;
        }
    }
})

export const { setFavItem } = favReducer.actions
export const { addFavItem } = favReducer.actions
export const { getFavItem } = favReducer.actions

export default favReducer.reducer