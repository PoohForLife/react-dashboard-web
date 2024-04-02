import React from 'react'
import { Box, Typography, Paper, List, ListItemButton, ListItemText } from '@mui/material'
import { BODY, COMPONENT } from '../../utils/config-layout'
import { useNavigate, useLocation } from 'react-router-dom'
import { useResponsive } from '../../utils/config-responsive'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import SummaryPriceBox from '../../components/summaryPriceBox/summaryPriceBox'
import ic_debitcard from '../../assets/ic_debitcard.png'
import ic_upi from '../../assets/ic_upi.png'
import ic_phonepay from '../../assets/ic_phonepay.png'
import ic_netbanking from '../../assets/ic_netbanking.png'
import ic_creditcard from '../../assets/ic_creditcard.png'

function Payment() {

  const navigate = useNavigate();
  const isUpSM = useResponsive('up', 'sm');
  const location = useLocation();
  const HOTEL = location.state.HOTEL;

  const clickPayment = () => {
    navigate('/explore/paymentDone');
  }

  const styleMainBox = {
    height: '100vh',
    width: '100%',
    maxHeight: '100vh',
    p: BODY.PADDING,
    display: 'flex',
    flexDirection: isUpSM ? 'row' : 'column-reverse',
    justifyContent: 'space-evenly',
  }
  const styleLeftBox = {
    width: isUpSM ? '45%' : '100%',
    height: isUpSM ? '100%' : 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  }
  const styleRightBox = {
    ...styleLeftBox,
  }
  const stylePriceBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    p: BODY.PADDING,
  }
  const styleList = {
    width: '100%',
    display: 'block',
    flexDirection: 'column',
  }
  const styleIcon = {
    width: '50px',
    height: '50px',
    mx: 2,
  }
  const styleArrow = {
    width: '24px',
    height: '24px',
    color: 'background.secondaryBlue',
  }
  const styleListButton = {
    height: COMPONENT.BUTTON_HEIGHT,
    my: 2,
    transform: 'translateX(0px)',
    '&:hover': {
      transform: 'translateX(16px)',
      transition: '0.3s',
      border: '1px solid',
      borderColor: 'background.secondaryBlue',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.4)',
    },
    '& .iconArrow': {
      opacity: 0,
      visibility: 'hidden',
      transition: 'opacity 0.2s, visibility 0.2s',
    },
    '&:hover .iconArrow': {
      opacity: 1,
      visibility: 'visible',
      transform: 'rotate(360deg)',
      transition: '0.3s',
    },
  }

  return (
    <Box sx={styleMainBox}>
      {/* LEFT BOX */}
      <Box sx={styleLeftBox}>
        <Typography variant='h6' color='text.primary'>Payment Method</Typography>
        <List sx={styleList}>
          <ListItemButton onClick={() => clickPayment()} sx={styleListButton}>
            <Box component='img' src={ic_debitcard} sx={styleIcon} />
            <ListItemText primary='Debit Card' />
            <KeyboardArrowRightOutlinedIcon className='iconArrow' sx={styleArrow} />
          </ListItemButton>

          <ListItemButton onClick={() => clickPayment()} sx={styleListButton}>
            <Box component='img' src={ic_upi} sx={styleIcon} />
            <ListItemText primary='UPI' />
            <KeyboardArrowRightOutlinedIcon className='iconArrow' sx={styleArrow} />
          </ListItemButton>

          <ListItemButton onClick={() => clickPayment()} sx={styleListButton}>
            <Box component='img' src={ic_phonepay} sx={styleIcon} />
            <ListItemText primary='Phone Pay' />
            <KeyboardArrowRightOutlinedIcon className='iconArrow' sx={styleArrow} />
          </ListItemButton>

          <ListItemButton onClick={() => clickPayment()} sx={styleListButton}>
            <Box component='img' src={ic_netbanking} sx={styleIcon} />
            <ListItemText primary='Net Banking' />
            <KeyboardArrowRightOutlinedIcon className='iconArrow' sx={styleArrow} />
          </ListItemButton>

          <ListItemButton onClick={() => clickPayment()} sx={styleListButton}>
            <Box component='img' src={ic_creditcard} sx={styleIcon} />
            <ListItemText primary='Credit Card' />
            <KeyboardArrowRightOutlinedIcon className='iconArrow' sx={styleArrow} />
          </ListItemButton>
        </List>
      </Box>
      
      {/* RIGHT BOX */}
      <Box sx={styleRightBox}>
        <Paper elevation={3} sx={stylePriceBox}>
          <SummaryPriceBox pricePerNight={HOTEL && HOTEL.pricePerNight} />
        </Paper>
      </Box>
    </Box>
  )
}

export default Payment