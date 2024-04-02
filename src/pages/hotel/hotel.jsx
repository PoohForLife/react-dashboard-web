import React from 'react'
import { Box, Button, InputBase, Paper, Stack, Typography, Grid } from '@mui/material'
import { BODY, COMPONENT } from '../../utils/config-layout'
import { useResponsive } from '../../utils/config-responsive'
import { useNavigate } from 'react-router-dom'
import { LIST_HOTEL } from '../../mockData/mockData'
import { LIST_RECOMAND } from '../../mockData/mockData'
import HotelCard from '../../components/hotelCard/hotelCard'
import HotelRecomandCard from '../../components/hotelRecomandCard/hotelRecomandCard'

function Hotel() {

  const navigate = useNavigate();
  const isUpSM = useResponsive('up', 'sm');
  const isUpLG = useResponsive('up', 'lg');

  const clickViewDetail = (hotel) => {
    navigate('/explore/hotelDetail', { state: { HOTEL: hotel } });
  }
  
  const LAYOUT = {
    RIGHT_SIDE_BOX_WIDTH: '200px',
  }
  const styleMainBox = {
    display: 'flex',
    justifyContent: 'space-between',
  }
  const styleLeftSideBox = {
    p: BODY.PADDING,
    width: isUpLG ? `calc(100% - ${LAYOUT.RIGHT_SIDE_BOX_WIDTH})` : '100%',
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
  const styleCommandBox = {
    height: COMPONENT.BUTTON.HEIGHT,
    width: '100%',
    display: 'flex',
    direction: 'row',
    justifyContent: 'space-between',
    my: 2,
  }
  const styleTitleTypography = {
    alignSelf: 'center',
  }
  const styleTitleButton = {
    height: COMPONENT.BUTTON.HEIGHT,
    width: 'auto',
    borderRadius: '10px',
    borderColor: 'background.secondaryBlue',
    color: 'background.secondaryBlue',
    '&:hover': {
      borderColor: 'background.secondaryBlue',
      color: 'background.secondaryBlue',
    },
  }
  const styleHotelCardBox = {
    width: isUpSM ? '30%' : '100%',
  }
  const styleRightSideBox = {
    width: LAYOUT.RIGHT_SIDE_BOX_WIDTH,
    display: isUpLG ? 'block' : 'none',
    p: 1,
    mt: `calc(${BODY.PADDING} + ${COMPONENT.INPUTBASE.HEIGHT} + ${BODY.PADDING})`,
    mb: BODY.PADDING,
    position: 'sticky',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
  }
  const styleRightSideTitle = {
    py: 1,
  }

  return (
    <Box sx={styleMainBox}>
      {/* LEFT SIDE */}
      <Box sx={styleLeftSideBox}>
        <Box sx={styleSearchBox}>
          <InputBase placeholder='Search City, Country, Place for Travel advisory' sx={styleSearchTextField} />
        </Box>
        <Box sx={styleCommandBox}>
          <Typography variant='subtitle1' sx={styleTitleTypography}>Best place to enjoy your stay</Typography>
          <Stack direction='row' spacing={2}>
            <Button variant="outlined" sx={styleTitleButton}>Sort By</Button>
            <Button variant="outlined" sx={styleTitleButton}>Filter</Button>
          </Stack>
        </Box>
        <Grid container spacing={2}>
            {LIST_HOTEL.map((hotel, index) => (
              <Grid item xs={12} sm={4} md={4} lg={3} sx={styleHotelCardBox} key={index}>
                <HotelCard hotel={hotel} onClickViewDetail={() => clickViewDetail(hotel)} />
              </Grid>
            ))}
          </Grid>
      </Box>

      {/* RIGHT SIDE */}
      <Paper elevation={3} sx={styleRightSideBox}>
        <Typography variant='subtitle2' sx={styleRightSideTitle}>Recomanded</Typography>
        <Stack direction='column' spacing={4} useFlexGap flexWrap='wrap'>
         {LIST_RECOMAND.map((item, index) => (
            <Box key={index}>
              <HotelRecomandCard item={item} />
            </Box>
          ))}
        </Stack>
      </Paper>
    </Box>
  )
}

export default Hotel