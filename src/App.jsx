import React from 'react'
import { Box } from '@mui/material'
import { Outlet, useRoutes } from 'react-router-dom'
import { useResponsive } from './utils/config-responsive'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import ThemeProvider from './theme/themeProvider'
import { SIDE_BAR, APP_BAR } from './utils/config-layout'
import SideBar from './components/sideBar/sideBar'
import NavigationBar from './components/navigationBar/navigationBar'
import NotFound from './pages/notFound/notFound'
import MainPage from './pages/mainPage/mainPage'

function App() {

  const isUpMD = useResponsive('up', 'md');
  const styleOutlet = {
    //pl: isUpMD ? SIDE_BAR.WIDTH : 0,
    //pt: isUpMD ? 0 : APP_BAR.HEIGHT,
    pl: 0,
    pt: APP_BAR.HEIGHT,
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
      { path: '/', element: <MainPage />},
    ]
  },
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
