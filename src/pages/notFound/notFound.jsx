import React from 'react'
import { Box, Button, Stack } from '@mui/material'
import { COMPONENT } from '../../utils/config-layout'
import ic_error_404 from '../../assets/ic_error_404.svg'

function NotFound() {

    const styleMainBox = { 
      height: '100vh', 
      width: '100%',
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      alignself: 'center',
    }
    const styleImage = {
      height: '30%', 
      width: '100%',
      objectFit: 'contain',
    }
    const styleButton = {
      color: 'white',
      backgroundColor: 'colors.primaryBlue',
      height: COMPONENT.BUTTON.HEIGHT,
      width: '30%',
      '&:hover': {
          backgroundColor: 'colors.secondaryBlue',
      }
    }
  
    return (
      <Stack sx={styleMainBox} spacing={4}>
        <Box component='img' src={ic_error_404} alt='payment_done' sx={styleImage} />
        <Button sx={styleButton}>Back to Home</Button>
      </Stack>
    )
}

export default NotFound