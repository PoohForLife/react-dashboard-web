import React from "react"
import { Outlet } from "react-router-dom"
import { useRoutes } from "react-router-dom"
import ThemeProvider from "./theme/themeProvider"

function App() {
  const elements = useRoutes([{
      element: (
        <Outlet />
      ),
      children: [
        { path: '/', element: <h1>Home</h1> },
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
