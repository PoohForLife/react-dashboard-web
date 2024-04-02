import React from 'react'
import { useState } from 'react'
import { Box, Button, InputBase, Stack, Paper, Typography, Rating } from '@mui/material'
import { BODY, COMPONENT } from '../../utils/config-layout'
import { useResponsive } from '../../utils/config-responsive'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { addHotelBookingGuest } from '../../store/bookingReducer'
import dayjs from 'dayjs'
import AddGuestCard from '../../components/addGuestCard/addGuestCard'
import SummaryPriceBox from '../../components/summaryPriceBox/summaryPriceBox'

function HotelBooking() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const today = dayjs();
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(today.add(1, 'day'));
  const HOTEL = location.state.HOTEL;
  const isUpLG = useResponsive('up', 'lg');
  const isUpMD = useResponsive('up', 'md');
  const { hotelBooking } = useSelector((state) => state.hotelBooking);

  const clickAddGuest = () => {
    dispatch(addHotelBookingGuest());
  }
  const clickContinue = () => {
    if (!isValidBooking()) {
      alert('Please fill in all the guest information');
      return;
    }
    navigate('/explore/payment', { state: { HOTEL: HOTEL } });
  }
  const clickSearch = () => {
    navigate('/explore/hotel');
  }
  const isValidBooking = () => {
    return hotelBooking.guest.every((guest) => {
      const isNotEmpty = (guest.firstName !== '' && guest.lastName !== '' && guest.email !== '' && guest.mobileNumber !== '');
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guest.email);
      const isValidMobileNumber = (/^[0-9]*$/.test(guest.mobileNumber) && guest.mobileNumber.length === 10);
      return isNotEmpty && isValidEmail && isValidMobileNumber;
    });
  }

  const styleMainBox = {
    p: BODY.PADDING,
    width: '100%',
    justifyContent: 'center',
  }
  const styleSearchBox = {
    height: '60px',
    width: '100%',
    display: 'flex',
    borderRadius: '10px',
    backgroundColor: 'background.inputFormGrey',
  }
  const styleBodyBox = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: isUpMD ? 'row' : 'column',
    justifyContent: 'space-between',
    pt: BODY.PADDING,
  }
  const styleBodyLeftBox = {
    width: isUpMD ? '70%' : '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pb: BODY.PADDING,
    pr: isUpMD ? `calc(${BODY.PADDING} / 2)` : 0,
  }
  const styleBodyRightBox = {
    width: 'auto',
    height: '100%',
    minWidth: '30%',
    display: 'flex',
    flexDirection: 'column',
    pl: isUpMD ? `calc(${BODY.PADDING} / 2)` : 0,
    pb: BODY.PADDING,
  }
  const styleSearchTextField = {
    width: '100%',
    m: 2,
    '& .MuiInputBase-input::placeholder': {
      color: 'text.placeholder',
      opacity: 1,
    },
  }
  const stylePlaceGrid = {
    ...styleSearchBox,
    width: isUpLG ? '25%' : '100%',
    borderRadius: 0,
    border: '1px solid',
    borderColor: 'background.primaryGrey',
    backgroundColor: 'white',
  }
  const styleDateGrid = {
    ...stylePlaceGrid,
    width: isUpLG ? '30%' : '100%',
    display: 'flex',
    justifyContent: 'space-between',
  }
  const styleNumberGuestGrid = {
    ...stylePlaceGrid,
  }
  const styleSearchButton = {
    height: '60px',
    width: isUpLG ? 'auto' : '100%',
    borderRadius: 0,
    backgroundColor: 'background.primaryBlue',
    color: 'white',
    flexGrow: 1,
    '&:hover': {
      backgroundColor: 'background.secondaryBlue',
    },
  }
  const stylePriceBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    p: BODY.PADDING,
  }
  const styleRemarkBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    p: BODY.PADDING,
  }
  const styleHotelInfomationBox = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
  const styleHotelImage = {
    maxHeight: '15vh',
    width: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
  }
  const styleRating = {
    alignSelf: 'center',
  }
  const styleSummaryBox = {
    display: 'flex',
    justifyContent: 'space-evenly',
    p: BODY.PADDING,
    backgroundColor: 'background.thirdBlue',
    borderRadius: '10px',
  }
  const styleSummaryItem = {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  }
  const styleSummaryButton = {
    height: COMPONENT.BUTTON.HEIGHT,
    width: '100%',
    color: 'background.primaryBlue',
    backgroundColor: 'background.fourthBlue',
    borderRadius: '10px',
    '&:hover': {
      color: 'background.primaryBlue',
      backgroundColor: 'background.fourthBlue',
    }
  }
  const styleAddGuestBox = {
    py: BODY.PADDING,
  }
  const styleTextArea = {
    height: '120px',
    width: '100%',
    border: '1px solid',
    borderRadius: '10px',
    borderColor: '#A5A6AA',
    padding: '10px',
  }
  const styleContinueButton = {
    ...styleSearchButton,
    width: isUpMD ? '50%' : '100%',
  }
  const styleDatePicker = {
    width: '100%',
    '& .MuiButtonBase-root': {
      position: 'absolute',
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,
      borderRadius: '0px',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    '& .MuiSvgIcon-root': {
      display: 'none',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      borderRadius: '0px',
    },
  }

  return (
    <Box sx={styleMainBox}>
      {/* TOP SIDE */}
      <Stack spacing={2} direction='row' useFlexGap flexWrap='wrap'>
        <Box sx={styleSearchBox}>
          <InputBase placeholder='Search City, Country, Place for Travel advisory' sx={styleSearchTextField} />
        </Box>
        <Box sx={stylePlaceGrid}>
          <InputBase sx={styleSearchTextField} placeholder='Where are you going?' />
        </Box>
        <Box sx={styleDateGrid}>
          <DatePicker minDate={today} maxDate={toDate.add(-1, 'day')} format='DD MMM YYYY' value={fromDate} onChange={(newValue) => setFromDate(newValue)} sx={styleDatePicker}/>
          <DatePicker minDate={fromDate.add(1, 'day')} format='DD MMM YYYY' value={toDate} onChange={(newValue) => setToDate(newValue)} sx={styleDatePicker}/>
        </Box>
        <Box sx={styleNumberGuestGrid}>
          <InputBase sx={styleSearchTextField} placeholder='Number of Guest' />
        </Box>
        <Button onClick={() => clickSearch()} sx={styleSearchButton}>
          Search
        </Button>
      </Stack>

      {/* BOTTOM SIDE */}
      <Box sx={styleBodyBox}>
        {/* LEFT SIDE */}
        <Box sx={styleBodyLeftBox}>
          <Stack spacing={2}>
            <Typography variant='h5'>Review your booking</Typography>
            <Box sx={styleHotelInfomationBox}>
              <Box display='flex' flexDirection='column'>
                <Stack direction='row' spacing={1}>
                  <Typography variant='h6' color='background.secondaryBlue'>{HOTEL && HOTEL.name}</Typography>
                  <Rating value={HOTEL && HOTEL.rating} readOnly size='small' sx={styleRating} />
                </Stack>
                <Typography variant='caption' color='text.placeholder'>{HOTEL && HOTEL.address}</Typography>
                <Typography variant='caption' color='text.placeholder'>{HOTEL && HOTEL.description}</Typography>
              </Box>
              <Box component='img' src={HOTEL && HOTEL.image} sx={styleHotelImage} />
            </Box>

            <Stack spacing={2} direction='row' useFlexGap flexWrap='wrap' sx={styleSummaryBox}>
              <Box sx={styleSummaryItem}>
                <Typography variant='caption'>Check-in</Typography>
                <Typography variant='subtitle2'>{fromDate.format('dddd DD, MMM')}</Typography>
                <Typography variant='body2'>10am</Typography>
              </Box>
              <Box sx={styleSummaryItem}>
                <Button sx={styleSummaryButton} disableRipple>{toDate.diff(fromDate, 'day')} night</Button>
              </Box>
              <Box sx={styleSummaryItem}>
                <Typography variant='caption'>Check-out</Typography>
                <Typography variant='subtitle2'>{toDate.format('dddd DD, MMM')}</Typography>
                <Typography variant='body2'>10am</Typography>
              </Box>
              <Box sx={styleSummaryItem}>
                <Typography variant='subtitle2'>{hotelBooking.guest.length} Adult - 1 room</Typography>
              </Box>
            </Stack>

            <Box>
              <Typography variant='h6'>Guest Details</Typography>
              <Stack direction='column' spacing={2} sx={styleAddGuestBox}>
                {hotelBooking && hotelBooking.guest.map((guest, index) => ( 
                  <AddGuestCard guest={guest} index={index} isCanDelete={hotelBooking.guest.length > 1} key={index} />
                ))}
              </Stack>
              <Button onClick={() => clickAddGuest()}>Add Guest +</Button>
            </Box>

            <Box display='flex' flexDirection='column'>
              <Typography variant='h6'>Special Request (Optional)</Typography>
              <textarea style={styleTextArea} />
            </Box>

            <Button onClick={() => clickContinue()} sx={styleContinueButton}>
              Continue
            </Button>
          </Stack>
        </Box>

        {/* RIGHT SIDE */}
        <Box sx={styleBodyRightBox}>
          <Box sx={stylePriceBox}>
            <SummaryPriceBox pricePerNight={HOTEL && HOTEL.pricePerNight} />
          </Box>
          <Paper elevation={3}>
            <Box sx={styleRemarkBox}>
              <Typography variant='subtitle2'>Cancellation Charges</Typography>
              <Typography variant='subtitle2'>Non Refundable</Typography>
              <Typography variant='caption'>Penalty may be charged by the airline & by MMT based on how close to departure date you cancel. View fare rules to know more. </Typography>
              <Typography variant='caption'>VIEW POLICY</Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}

export default HotelBooking