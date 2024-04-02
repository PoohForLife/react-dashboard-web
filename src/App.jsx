import React from 'react'
import { Box } from '@mui/material'
import { Outlet, useRoutes } from 'react-router-dom'
import { useResponsive } from './utils/config-responsive'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import ThemeProvider from './theme/themeProvider'
import { SIDE_BAR, APP_BAR } from './utils/config-layout'
import Explore from './pages/explore/explore'
import Hotel from './pages/hotel/hotel'
import HotelBooking from './pages/hotelBooking/hotelBooking'
import HotelDetail from './pages/hotelDetail/hotelDetail'
import Payment from './pages/payment/payment'
import PaymentDone from './pages/paymentDone/paymentDone'
import SideBar from './components/sideBar/sideBar'
import NavigationBar from './components/navigationBar/navigationBar'
import NotFound from './pages/notFound/notFound'

function App() {

  const isUpMD = useResponsive('up', 'md');
  const styleOutlet = {
    pl: isUpMD ? SIDE_BAR.WIDTH : 0,
    pt: isUpMD ? 0 : APP_BAR.HEIGHT,
  }
  const elements = useRoutes([{
    element: (
      <Box>
        <NavigationBar />
        <SideBar /> 
        <Box sx={styleOutlet} >
          <Outlet />
        </Box>
      </Box>
    ),
    children: [
      { path: '/', element: <Explore />},
      { path: '/explore', element: <Explore />},
      { path: '/explore/hotel', element: <Hotel />},
      { path: '/explore/hotelDetail', element: <HotelDetail />},
      { path: '/explore/hotelBooking', element: <HotelBooking />},
      { path: '/explore/payment', element: <Payment />}, 
    ]
  },
  { path: '/explore/paymentDone', element: <PaymentDone />}, 
  { path: '*', element: <NotFound /> }
])
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider>
        {elements}
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
