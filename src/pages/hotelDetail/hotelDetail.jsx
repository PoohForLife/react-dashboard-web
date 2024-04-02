import React from 'react'
import { Box, Button, InputBase, Stack, ImageList, ImageListItem, Paper, Typography, Rating } from '@mui/material'
import { BODY, COMPONENT } from '../../utils/config-layout'
import { useResponsive } from '../../utils/config-responsive'
import { useNavigate, useLocation } from 'react-router-dom'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react'
import dayjs from 'dayjs'
import HotelFacilityCard from '../../components/hotelFacilityCard/hotelFacilityCard'
import HotelRoomCard from '../../components/hotelRoomCard/hotelRoomCard'
import HotelPreviewImageList from '../../components/hotelPreviewImageList/hotelPreviewImageList'
import ic_remark from '../../assets/ic_remark.svg'

function HotelDetail() {

  const today = dayjs();
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(today.add(1, 'day'));
  const navigate = useNavigate();
  const location = useLocation();
  const HOTEL = location.state.HOTEL;
  const isUpLG = useResponsive('up', 'lg');
  const isUpMD = useResponsive('up', 'md');

  const clickBookNow = () => {
    navigate('/explore/hotelBooking', { state: { HOTEL: HOTEL } });
  }
  const clickSearch = () => {
    navigate('/explore/hotel');
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
    pr: `calc(${BODY.PADDING} / 2)`,
  }
  const styleBodyRightBox = {
    width: 'auto',
    height: '100%',
    minWidth: '30%',
    display: 'flex',
    flexDirection: 'column',
    pl: `calc(${BODY.PADDING} / 2)`,
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
  const styleHotelInfomationBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    p: BODY.PADDING,
  }
  const styleHotelPriceButton = {
    height: COMPONENT.BUTTON.HEIGHT,
    width: 'auto',
    borderRadius: '10px',
    borderColor: 'background.secondaryBlue',
    color: 'background.secondaryBlue',
    alignSelf: 'center',
    '&:hover': {
      borderColor: 'background.secondaryBlue',
      color: 'background.secondaryBlue',
    },
  }
  const styleHotelRoomCardBox = {
    width: isUpLG ? '45%' : '100%',
  }
  const styleReviewPaper = {
    p: BODY.PADDING,
    backgroundColor: 'white',
  }
  const styleScoreBackgroundBox = {
    height: '80px',
    borderRadius: '10px',
    backgroundImage: 'linear-gradient(to bottom, #2D3DDF 30%, white 50%)',
  }
  const styleScoreLeftBox = {
    width: '30%',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '10px',
    backgroundColor: 'background.primaryBlue',
  }
  const styleScoreRightBox = {
    width: '100%',
    borderColor: 'white',
    borderRadius: '10px',
    borderBottomLeftRadius: 0,
    backgroundColor: 'white',
    p: BODY.PADDING,
  }
  const styleRatingText = {
    width: '50%',
    alignSelf: 'center',
  }
  const styleRating = {
    height: '50px',
    width: 1,
    alignItems: 'center',
  }
  const styleRemarkBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    py: BODY.PADDING,
  }
  const styleRemarkText = {
    width: 1,
    px: BODY.PADDING,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'background.primaryBlue',
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
          <Box display='flex' flexDirection='column'>
            <HotelPreviewImageList previewImage={HOTEL && HOTEL.previewImage} />

            <Box sx={styleHotelInfomationBox}>
              <Box>
                <Typography variant='h3'>{HOTEL && HOTEL.name}</Typography>
                <Typography variant='subtitle1' color='text.placeholder'>{HOTEL && HOTEL.address}</Typography>
              </Box>
              <Button variant='outlined' sx={styleHotelPriceButton}>
                Price Starting From {HOTEL && HOTEL.pricePerNight} BAHT
              </Button>
            </Box>

            <Stack spacing={1} direction='row' useFlexGap flexWrap='wrap' display='flex' justifyContent='space-between'>
              {HOTEL && HOTEL.rooms.map((room, index) => (
                <Box sx={styleHotelRoomCardBox} key={index}>
                  <HotelRoomCard room={room} clickBookNow={() => clickBookNow()} />
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* RIGHT SIDE */}
        <Box sx={styleBodyRightBox}>
          <Paper elevation={3} sx={styleReviewPaper}>
            <Stack direction='column' spacing={1}>
              <Box sx={styleScoreBackgroundBox}>
                <Box display='flex' flexDirection='row'>
                  <Box sx={styleScoreLeftBox}>
                    <Typography variant='h4' color='white' >{HOTEL && HOTEL.score.overAll.toFixed(1)}</Typography>
                  </Box>
                  <Box sx={styleScoreRightBox}>
                    <Typography variant='subtitle2'>Excellent</Typography>
                    <Typography variant='body2' color='text.placeholder'>{HOTEL && HOTEL.reviewCount} reviews</Typography>
                  </Box>
                </Box>
              </Box>

              <Stack direction='column' spacing={1}>
                <Box display='flex' flexDirection='row'>
                  <Typography variant='caption' sx={styleRatingText}>HouseKeeping</Typography>
                  <Rating value={HOTEL && HOTEL.score.houseKeeping} readOnly size='small' sx={styleRating} />
                </Box>
                <Box display='flex' flexDirection='row'>
                  <Typography variant='caption' sx={styleRatingText}>Food</Typography>
                  <Rating value={HOTEL && HOTEL.score.food} readOnly size='small' sx={styleRating} />
                </Box>
                <Box display='flex' flexDirection='row'>
                  <Typography variant='caption' sx={styleRatingText}>Service</Typography>
                  <Rating value={HOTEL && HOTEL.score.service} readOnly size='small' sx={styleRating} />
                </Box>
                <Box display='flex' flexDirection='row'>
                  <Typography variant='caption' sx={styleRatingText}>Staff</Typography>
                  <Rating value={HOTEL && HOTEL.score.staff} readOnly size='small' sx={styleRating} />
                </Box>
              </Stack>

              <Box>
                <Typography variant='caption'>Services</Typography>
                <Stack direction='row' spacing={2}>
                    {HOTEL && HOTEL.serviceType.map((serviceType, index) => 
                      <HotelFacilityCard key={index} serviceType={serviceType} />)
                    }
                </Stack>
              </Box>
            </Stack>
          </Paper>
          <Box sx={styleRemarkBox}>
            <Box component='img' src={ic_remark} />
            <Typography variant='caption' sx={styleRemarkText}>This property is in highly demand today.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HotelDetail