import React from 'react'
import { Box, Button, Typography, Stack } from '@mui/material'
import { COMPONENT } from '../../utils/config-layout'
import { useNavigate } from 'react-router'
import img_payment_done from '../../assets/img_payment_done.png'

function PaymentDone() {

  const navigate = useNavigate();

  const clickBackToHome = () => {
    navigate('/explore');
  }

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
  const styleText = {
    textAlign: 'center',
    color: 'background.secondaryBlue',
  }
  const styleButton = {
    color: 'white',
    backgroundColor: 'background.primaryBlue',
    height: COMPONENT.BUTTON.HEIGHT,
    width: '30%',
    '&:hover': {
        backgroundColor: 'background.secondaryBlue',
    }
  }

  return (
    <Stack sx={styleMainBox} spacing={4}>
      <Box component='img' src={img_payment_done} alt='payment_done' sx={styleImage} />
      <Typography variant='h3' sx={styleText}>Booking Successfully completed</Typography>
      <Button onClick={() => clickBackToHome()} sx={styleButton}>Back to Home</Button>
    </Stack>
  )
}

export default PaymentDone