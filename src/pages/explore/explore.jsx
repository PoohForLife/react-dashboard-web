import React from 'react'
import { Box, Stack, InputBase, Typography, Button, Grid, IconButton } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react'
import { useResponsive } from '../../utils/config-responsive'
import { useNavigate } from 'react-router-dom'
import { BODY, COMPONENT } from '../../utils/config-layout'
import { LIST_HOTEL } from '../../mockData/mockData'
import dayjs from 'dayjs'
import HotelRecentSearchCard from '../../components/hotelRecentSearchCard/hotelRecentSearchCard'
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined'
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined'
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import img_landscape from '../../assets/img_landscape.png'
import img_landscape_cover from '../../assets/img_landscape_cover.png'

function Explore() {

  const today = dayjs();
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(today.add(1, 'day'));
  const navigate = useNavigate();
  const isDownLG = useResponsive('down', 'lg');
  const LIST_RECENT_HOTEL = LIST_HOTEL.filter((hotel, index) => hotel.isRecentSearch === true);

  const clickSearch = () => {
    navigate('/explore/hotel');
  }
  const clickBookNow = (hotel) => {
    navigate('/explore/hotelBooking', { state: { HOTEL: hotel } });
  }
  const clickSearchType = (type) => {
    window.location.hash = type;
  }
  const isActiveSearchType = (type) => {
    const hash = window.location.hash.substring(1);
    if (hash === '') {
      return type === 'hotel';
    }
    return hash === type;
  }

  const styleMainBox = {
    height: '100%',
    width: isDownLG ? '100%' : '50%',
    p: BODY.PADDING,
  }
  const styleSearchBox = {
    height: COMPONENT.INPUTBASE.HEIGHT,
    width: '100%',
    display: 'flex',
    borderRadius: '10px',
    backgroundColor: 'background.inputFormGrey',
  }
  const styleSearchTextField = {
    width: '100%',
    m: 2,
    '& .MuiInputBase-input::placeholder': {
      color: 'text.placeholder',
      opacity: 1,
    },
  }
  const styleInputFormBox = {
    pt: 6,
  }
  const styleInputFormTitle = {
    color: 'background.primaryBlue',
    px: 2,
  }
  const styleMenuContentBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    justifySelf: 'center',
    py: 4,
  }
  const styleMenuBox = {
    '& .menuItem': {
      textDecoration: 'none',
      height: '70px',
      width: '70px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      '&:hover': {
        transition: '0.3s',
        backgroundColor: 'background.secondaryBlue',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '& .menuItemImage': { 
          color: 'white',
        },
        '& .menuItemText': {
          color: 'black'
        }
      },
    },
    '& .menuItemImage': { 
      color: 'background.primaryGrey',
    },
    '& .menuItemText': {
      color: 'background.primaryGrey',
      textDecoration: 'none',
    }
  }
  const styleMenuBoxActive = {
    '& .menuItem': {
      textDecoration: 'none',
      height: '70px',
      width: '70px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      transition: '0.3s',
      backgroundColor: 'background.secondaryBlue',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    '& .menuItemImage': { 
      color: 'white',
    },
    '& .menuItemText': {
      color: 'black',
    }
  }
  const styleLogoMenuSizeBox = {
    width: '32px',
    height: '32px',
    userSelect: 'none',
    color: 'background.primaryGrey',
  }
  const styleMenuTypography = {
    display: 'flex',
    justifyContent: 'center',
    color: 'text.sideBar',
    userSelect: 'none',
    pt: 1,
  }
  const styleInputBaseStack = {
    height: COMPONENT.INPUTBASE.HEIGHT,
    width: '100%',
    alignItems: 'center',
    borderRadius: '10px',
    border: '1px solid',
    borderColor: 'background.primaryBlue',
    backgroundColor: 'background.inputFormGrey',
    px: 1,
  }
  const styleLogoInputBase = {
    ...styleLogoMenuSizeBox,
    width: '24px',
    height: '24px',
  }
  const styleSearchButton = {
    height: COMPONENT.BUTTON.HEIGHT,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '10px',
    backgroundColor: 'background.primaryBlue',
    color: 'white',
    '&:hover': {
      backgroundColor: 'background.secondaryBlue',
    },
  }
  const styleRecentSearchBox = {
    ...styleInputFormBox,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
  const styleRecentSearchTitle = {
    color: 'black',
  }
  const styleRecentSearchGrid = {
    height: '100%',
    width: '100%',
    py: 2,
  }
  const styleLandscapeBox = {
    position: 'relative',
    display: isDownLG ? 'none' : 'block',
  }
  const styleLandscapeImage = {
    position: 'fixed',
    height: '100%',
    width: '45%',
    right: 0,
    top: 0,
    bottom: 0,
    objectFit: 'fill',
    zIndex: -1,
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
  }
  const styleLandscapeImageCover = {
    ...styleLandscapeImage,
    zIndex: 1,
  }
  const styleLandscapeIconButton = {
    height: '32px',
    width: '32px',
    position: 'fixed',
    right: '16px',
    top: '50%',
    zIndex: 2,
    display: isDownLG ? 'none' : 'block',
  }
  const styleLandscapeIcon = {
    color: 'background.alphaWhite',
    height: '32px',
    width: '32px',
  }
  const styleLandscapeInformationBox = {
    position: 'fixed',
    height: '40%',
    left: '55%',
    p: 4,
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'start',
    zIndex: 2,
  }
  const styleLandscapeTitle = {
    color: 'white',
    pl: 2,
  }
  const styleLandscapeSubTitle01 = {
    ...styleLandscapeTitle,
    pl: 0,
  }
  const styleLandscapeSubTitle02 = {
    ...styleLandscapeTitle,
    pl: 4,
  }
  const styleLandscapeButton = {
    color: 'white',
    backgroundColor: 'background.alphaWhite',
    borderRadius: '0px',
    px: 4,
    my: 2,
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
    <Grid container>
      {/* LEFT SIDE */}
      <Grid item sx={styleMainBox}>
        {/* SEARCH */}
        <Box sx={styleSearchBox}>
          <InputBase placeholder='Search City, Country, Place for Travel advisory' sx={styleSearchTextField} />
        </Box>

        {/* INPUT FORM */}
        <Box sx={styleInputFormBox}>
          <Typography variant='h3' sx={styleInputFormTitle} >
            What are you looking for?
          </Typography>
          <Box sx={styleMenuContentBox}>
            <Box sx={isActiveSearchType('hotel') ? styleMenuBoxActive : styleMenuBox} onClick={() => clickSearchType('hotel')}>
              <Box className='menuItem'>
                  <HotelOutlinedIcon className='menuItemImage' sx={styleLogoMenuSizeBox} />
              </Box>
              <Typography className='menuItemText' variant='caption' sx={styleMenuTypography}>
                  Hotel
              </Typography>
            </Box>
            <Box sx={isActiveSearchType('flight') ? styleMenuBoxActive : styleMenuBox} onClick={() => clickSearchType('flight')}>
              <Box className='menuItem'>
                  <FlightTakeoffOutlinedIcon className='menuItemImage' sx={styleLogoMenuSizeBox} />
              </Box>
              <Typography className='menuItemText' variant='caption' sx={styleMenuTypography}>
                  Flight
              </Typography>
            </Box>
            <Box sx={isActiveSearchType('car') ? styleMenuBoxActive : styleMenuBox} onClick={() => clickSearchType('car')}>
              <Box className='menuItem'>
                  <DirectionsCarFilledOutlinedIcon className='menuItemImage' sx={styleLogoMenuSizeBox} />
              </Box>
              <Typography className='menuItemText' variant='caption' sx={styleMenuTypography}>
                  Car
              </Typography>
            </Box>
          </Box>
          <Stack direction='column' spacing={3}>
            <Stack direction='row' sx={styleInputBaseStack} spacing={1}>
              <LocationOnOutlinedIcon sx={styleLogoInputBase} />
              <InputBase sx={styleSearchTextField} placeholder='Location' />
            </Stack>
            <Stack direction='row' spacing={1}>
              <Stack direction='row' sx={styleInputBaseStack}>
                <CalendarMonthOutlinedIcon sx={styleLogoInputBase} />
                <DatePicker minDate={today} maxDate={toDate.add(-1, 'day')} format='DD MMM YYYY' value={fromDate} onChange={(newValue) => setFromDate(newValue)} sx={styleDatePicker}/>
              </Stack>
              <Stack direction='row' sx={styleInputBaseStack}>
                <CalendarMonthOutlinedIcon sx={styleLogoInputBase} />
                <DatePicker minDate={fromDate.add(1, 'day')} format='DD MMM YYYY' value={toDate} onChange={(newValue) => setToDate(newValue)} sx={styleDatePicker}/>
              </Stack>
            </Stack>
            <Stack direction='row' sx={styleInputBaseStack} spacing={1}>
              <PeopleAltOutlinedIcon sx={styleLogoInputBase} />
              <InputBase sx={styleSearchTextField} placeholder='Number of Guest' />
            </Stack>
            <Box display='flex' justifyContent='center'>
              <Button onClick={() => clickSearch()} sx={styleSearchButton}>
                Search
              </Button>
            </Box>
          </Stack>
        </Box>

        {/* RECENT SEARCH */}
        <Box sx={styleRecentSearchBox}>
          <Typography variant='h5' sx={styleRecentSearchTitle}>
            Recent Searches
          </Typography>
          <Stack spacing={0} direction='column' useFlexGap flexWrap='wrap'>
            {LIST_RECENT_HOTEL.map((hotel, index) => (
              <Box key={index} sx={styleRecentSearchGrid}>
                <HotelRecentSearchCard hotel={hotel} clickBookNow={clickBookNow} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Grid>
        
      {/* RIGHT SIDE */}
      <Grid item sx={styleLandscapeBox}>        
        <Box component='img' alt='landscape_image' src={img_landscape_cover} sx={styleLandscapeImageCover} draggable='false' />
        <Box component='img' alt='landscape_image' src={img_landscape} sx={styleLandscapeImage} draggable='false' />
        <IconButton sx={styleLandscapeIconButton}>
          <ArrowCircleRightOutlinedIcon sx={styleLandscapeIcon} />
        </IconButton>
        <Box sx={styleLandscapeInformationBox}>
          <Typography variant='h3' sx={styleLandscapeTitle}>
            Incredible India
          </Typography>
          <Typography variant='subtitle1' sx={styleLandscapeSubTitle01}>
            "For where thy treasure is,
          </Typography>
          <Typography variant='subtitle1' sx={styleLandscapeSubTitle02}>
            there will thy heart be"
          </Typography>
          <Button sx={styleLandscapeButton}>
            Take Tour
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Explore