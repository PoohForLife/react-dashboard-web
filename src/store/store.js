import { configureStore } from "@reduxjs/toolkit"
import layoutReducer from "./layoutReducer"
import bookingReducer from "./bookingReducer"

export default configureStore({
    reducer: {
        sideBar: layoutReducer,
        hotelBooking: bookingReducer,
    },
});