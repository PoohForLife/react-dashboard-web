import React from 'react'
import { useMemo } from 'react'
import { palette } from './palette'
import { typography } from './typography'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

function ThemeProvider({ children }) {
    const memorizedValue = useMemo(() => ({
        palette: palette(),
        typography: typography,
        shape: { borderRadius: 8 },
    }), []);
    
    const theme = createTheme({
        ...memorizedValue,
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: memorizedValue.palette.background.facebookPageGrey,
                    },
                },
            },
        },
    });

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    )
}

export default ThemeProvider