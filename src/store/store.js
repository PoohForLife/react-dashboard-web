import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import layoutReducer from "./layoutReducer";

export default configureStore({
    reducer: {
        user: userReducer,
        sideBar: layoutReducer,
    },
});