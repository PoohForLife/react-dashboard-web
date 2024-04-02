import React from 'react'
import { Box, Stack, Button, Typography, Paper } from '@mui/material'

function HotelCard({ hotel, onClickViewDetail }) {

  const styleImage = {
    minWidth: '150px',
    height: '150px',
    objectFit: 'cover',
  }
  const styleInfomationStack = {
    display: 'flex',
    justifyContent: 'space-between',
  }
  const styleInformationBox = {
    width: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  }
  const stylePaper = {
    height: 1,
    width: '100%',
    display: 'flex',
    alignSelf: 'center',
  }
  const styleButton = {
    height: 1,
    width: 1,
    background: 'white',
    color: 'background.secondaryBlue',
    '&:hover': {
      borderColor: 'background.secondaryBlue',
      color: 'background.secondaryBlue',
    },
  }

  return (
    <Stack direction='column' spacing={1}>
        <Box component='img' src={hotel.image} alt='hotel_image' sx={styleImage} draggable='false' />
        <Stack direction='row' spacing={1} sx={styleInfomationStack}>
            <Box sx={styleInformationBox}>
                <Typography variant='subtitle2'>{hotel.name}</Typography>
                <Typography variant='caption'>Price start from {hotel.pricePerNight}</Typography>
            </Box>
            <Paper elevation={1} sx={stylePaper}>
                <Button onClick={onClickViewDetail} sx={styleButton}>View Details</Button>
            </Paper>
        </Stack>
    </Stack>
  )
}

export default HotelCard