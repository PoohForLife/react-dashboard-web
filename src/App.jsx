import React from "react"
import { Outlet } from "react-router-dom"
import { useRoutes } from "react-router-dom"
import { Grid } from "@mui/material"
import ThemeProvider from "./theme/themeProvider"
import Home from "./pages/home/home"
import NavigationBar from "./components/navigationBar/navigationBar"
import SideBar from "./components/sideBar/sideBar"
import RightBar from "./components/rightBar/rightBar"

function App() {
  const elements = useRoutes([{
      element: (
        <>
          <NavigationBar />
          <Grid container>
            <Grid item xs={0} sm={2}>
              <SideBar />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Outlet />
            </Grid>
            <Grid item xs={0} sm={2}>
              <RightBar />
            </Grid>
          </Grid>
        </>
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
