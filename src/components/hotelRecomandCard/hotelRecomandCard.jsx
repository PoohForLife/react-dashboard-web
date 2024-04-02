import React from 'react'
import { Box, Typography, Stack} from '@mui/material'

function HotelRecomandCard({ item }) {
   
  const styleMainBox = {
    display: 'flex',
    justifyContent: 'center',
    
  }
  const styleImage = {
    width: '184px',
    height: '120px',
    borderRadius: '10px',
    mb: 1,
  }

  return (
    <Stack direction='column' spacing={0} sx={styleMainBox}>
        <Box component='img' alt='hotel_image' src={item.image} sx={styleImage} draggable='false' />
        <Typography variant='caption'>{item.title}</Typography>
        <Typography variant='caption'>{item.description}</Typography>
    </Stack>
  )
}

export default HotelRecomandCard