import React from 'react'
import { Box, Typography } from '@mui/material'
import img_hotel from '../../assets/img_hotel.png'

function HotelRoomCard({ room, clickBookNow }) {

    const styleCardBox = {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '10px',
        border: '1px solid',
        borderColor: 'background.primaryGrey',
    }
    const styleImageBox = {
        height: 'auto',
        width: 'auto',
        maxHeight: '100%',
        maxWidth: '50%',
        display: 'flex',
        borderRadius: '10px 0px 0px 10px',
    }
    const styleInformationBox = {
        height: '100%',
        width: '100%',
        mx: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
    }
    const styleBookNowBox = {
        height: '100%',
        width: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.primaryBlue',
        borderRadius: '0px 10px 10px 0px',
    }
    const styleBookNowTypography = {
        height: 'auto',
        minWidth: '100px',
        textAlign: 'center',
        color: 'white',
        display: 'block',
        transform: 'rotate(90deg)',
    }
    return (
        <Box sx={styleCardBox}>
            <Box component='img' alt='hotel_image' src={room.image} sx={styleImageBox} draggable='false' />
            <Box sx={styleInformationBox}>
                <Typography variant='subtitle1'>{room.name}</Typography>
                <Typography variant='subtitle1' color='text.primaryBlue'>{room.price}/night</Typography>
            </Box>
            <Box sx={styleBookNowBox} onClick={clickBookNow}>
                <Typography variant='subtitle1' sx={styleBookNowTypography}>Book Now</Typography>
            </Box>
        </Box>
    )
}

export default HotelRoomCard