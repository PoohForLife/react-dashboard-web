import React from 'react'
import { Box, Paper } from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import BathtubIcon from '@mui/icons-material/Bathtub'
import SportsBarIcon from '@mui/icons-material/SportsBar'
import WifiIcon from '@mui/icons-material/Wifi'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

function HotelFacilityCard({ serviceType }) {

  const stylePaper = {
    height: 'auto',
    width: 'auto',
    maxHeight: '32px',
    maxWidth: '32px',
    borderRadius: '10px',
  }
  const styleIconBox = {
    height: '100%',
    width: '100%',
    p:1,
    color: 'background.primaryBlue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
  const renderIcon = (serviceType) => {
    switch (serviceType) {
      case 1:
        return <DirectionsCarIcon sx={styleIconBox} />
      case 2:
        return <BathtubIcon sx={styleIconBox} />
      case 3:
        return <SportsBarIcon sx={styleIconBox} />
      case 4:
        return <WifiIcon sx={styleIconBox} />
      case 5:
        return <FitnessCenterIcon sx={styleIconBox} />
      default:
        return <MoreHorizIcon sx={styleIconBox} />
    }
  }
  return (
    <Paper elevation={3} sx={stylePaper}>
        {renderIcon(serviceType)}
    </Paper>
  )
}

export default HotelFacilityCard