import React from 'react'
import { Box } from '@mui/material'
import { Outlet, useRoutes } from 'react-router-dom'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import ThemeProvider from './theme/themeProvider'
import { APP_BAR } from './utils/config-layout'
import NavigationBar from './components/navigationBar/navigationBar'
import NotFound from './pages/notFound/notFound'
import HomePage from './pages/homePage/homePage'
import SummaryPage from './pages/summaryPage/summaryPage'

function App() {

  const styleOutlet = {
    pl: 0,
    pt: APP_BAR.HEIGHT,
  }
  const elements = useRoutes([{
    element: (
      <Box>
        <NavigationBar />
        <Box sx={styleOutlet} >
          <Outlet />
        </Box>
      </Box>
    ),
    children: [
      { path: '/', element: <HomePage />},
      { path: '/summary', element: <SummaryPage />},
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
