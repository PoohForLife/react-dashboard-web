import { configureStore } from "@reduxjs/toolkit"
import favReducer from "./favReducer"

export default configureStore({
    reducer: {
        favItem: favReducer,
    },
});