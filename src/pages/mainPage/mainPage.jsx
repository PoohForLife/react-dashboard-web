import React from 'react'
import { Box } from '@mui/material'
import HomePage from '../homePage/homePage'
import ProductPage from '../productPage/productPage'

export default function MainPage() {
    
    const styles = {
        viewMain: {
            display: 'flex',
            flexDirection: 'column',
        }
    }

    return (
        <Box sx={styles.viewMain}>
            <HomePage />
            <ProductPage />
        </Box>
    )
}
