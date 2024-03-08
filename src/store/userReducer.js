import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    password: '',
    email: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUser: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.email = action.payload.email;
        }
    }
})

export const { fetchUser } = userSlice.actions;
export default userSlice.reducer;