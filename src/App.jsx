import React from "react"
import { Outlet } from "react-router-dom"
import { useRoutes } from "react-router-dom"
import { Grid, Box } from "@mui/material"
import ThemeProvider from "./theme/themeProvider"
import Home from "./pages/home/home"
import NavigationBar from "./components/navigationBar/navigationBar"
import SideBar from "./components/sideBar/sideBar"
import RightBar from "./components/rightBar/rightBar"
import { APP_BAR } from "./utils/config-layout"

function App() {
  const styleBody = {
    mt: APP_BAR.HEIGHT,
  }
  const elements = useRoutes([{
      element: (
        <Box>
          <NavigationBar />
          <Grid container sx={styleBody}>
            <Grid item xs={0} sm={3}>
              <SideBar />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Outlet />
            </Grid>
            <Grid item xs={0} sm={3}>
              <RightBar />
            </Grid>
          </Grid>
        </Box>
      ),
      children: [
        { path: '/', element: <Home /> },
      ]
    },
    { path: '/login', element: <h1>Login</h1> },
    { path: '/register', element: <h1>Register</h1> },
    { path: '*', element: <h1>404 Not Found</h1> },
  ])
  return (
    <ThemeProvider>
      {elements}
    </ThemeProvider>
  );
}

export default App
