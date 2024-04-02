import React from 'react'
import { Box, Typography, Rating, Chip, Stack, Grid } from '@mui/material'
import { useResponsive } from '../../utils/config-responsive'
import HotelFacilityCard from '../hotelFacilityCard/hotelFacilityCard'
import StarIcon from '@mui/icons-material/Star'

function HotelRecentSearchCard({ hotel, clickBookNow }) {

  const isUpMD = useResponsive('up', 'md');

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
    width: isUpMD ? 'auto' : '100px',
    maxHeight: '100%',
    maxWidth: isUpMD ? '30%' : '30%',
    display: 'flex',
    borderRadius: '10px 0px 0px 10px',
  }
  const styleInformationBox = {
    height: '100%',
    width: '100%',
    m: 2,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  }
  const styleRatingStack = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    my: 1,
  }
  const styleChip = {
    color: 'white',
    backgroundColor: 'background.primaryRed',
    '& .MuiChip-icon': {
        color: 'white',
    }
  }
  const styleFacilityStack = {
    height: 'auto',
    width: '100%',
    py: 1,
  }
  const styleBookNowBox = {
    height: 'auto',
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
      backgroundColor: 'background.primaryBlue',
  }

  return (
    <Box sx={styleCardBox}>
      <Box component='img' alt='hotel_image' src={hotel.image} sx={styleImageBox} draggable='false' />

      <Box sx={styleInformationBox}>
        <Typography variant='subtitle1'>{hotel.name}</Typography>
        <Rating value={hotel.rating} readOnly size='small'/>
        <Stack direction='row' spacing={2} sx={styleRatingStack}>
            <Chip icon={<StarIcon />} label={hotel.rating.toFixed(1)} sx={styleChip} />
            <Typography variant='body2' color='text.placeholder'>{hotel.reviewCount} Reviewers</Typography>
        </Stack>
        <Typography variant='body2' color='text.placeholder'>Amenities</Typography>
        <Grid container direction='row' spacing={2} sx={styleFacilityStack}>
            {hotel.serviceType.map((serviceType, index) => 
              <Grid item xs={4} sm={2} key={index} alignItems='flex-start'>
                <HotelFacilityCard serviceType={serviceType} />
              </Grid>
            )}
        </Grid>
        <Typography variant='subtitle1' color='text.primaryBlue'>{hotel.pricePerNight}/night</Typography>
      </Box>

      <Box sx={styleBookNowBox} onClick={() => clickBookNow(hotel)}>
          <Typography variant='subtitle1' sx={styleBookNowTypography}>Book Now</Typography>
      </Box>
    </Box>
  )
}

export default HotelRecentSearchCard