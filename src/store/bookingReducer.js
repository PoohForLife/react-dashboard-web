import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    hotelBooking: {
        hotelId: '',
        checkInDate: '',
        checkOutDate: '',
        roomId: 1,
        guest: [
            {
                firstName: '',
                lastName: '',
                email: '',
                mobileNumber: '',
            }
        ],
        specialRequest: '',
    },
}

const bookingReducer = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setHotelBooking: (state, action) => {
            state.hotelBooking = action.payload
        },
        addHotelBookingGuest: (state, action) => {
            state.hotelBooking.guest.push({
                firstName: '',
                lastName: '',
                email: '',
                mobileNumber: '',
            })
        },
        removeHotelBookingGuest: (state, action) => {
            state.hotelBooking.guest = state.hotelBooking.guest.filter((guest, i) => i !== action.payload)
        },
        setHotelBookingGuestFirstName: (state, action) => {
            state.hotelBooking.guest[action.payload.index].firstName = action.payload.value
        },
        setHotelBookingGuestLastName: (state, action) => {
            state.hotelBooking.guest[action.payload.index].lastName = action.payload.value
        },
        setHotelBookingGuestEmail: (state, action) => {
            state.hotelBooking.guest[action.payload.index].email = action.payload.value
        },
        setHotelBookingGuestMobileNumber: (state, action) => {
            state.hotelBooking.guest[action.payload.index].mobileNumber = action.payload.value
        },
    }
})

export const { setHotelBooking } = bookingReducer.actions
export const { addHotelBookingGuest } = bookingReducer.actions
export const { removeHotelBookingGuest } = bookingReducer.actions
export const { setHotelBookingGuestFirstName } = bookingReducer.actions
export const { setHotelBookingGuestLastName } = bookingReducer.actions
export const { setHotelBookingGuestEmail } = bookingReducer.actions
export const { setHotelBookingGuestMobileNumber } = bookingReducer.actions
export default bookingReducer.reducer