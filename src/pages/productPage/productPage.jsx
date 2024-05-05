import React from 'react'
import { Box, Typography, Stack, Grid } from '@mui/material'
import { APP_BAR, BODY } from '../../utils/config-layout'
import CarCard from '../../components/carCard/carCard'

export default function ProductPage() {

    const listCars = [
        {
            id: 1,
            name: 'Car 1',
            description: 'Description 1',
            price: 1000,
            image: 'https://via.placeholder.com/200'
        },
        {
            id: 2,
            name: 'Car 2',
            description: 'Description 2',
            price: 2000,
            image: 'https://via.placeholder.com/200'
        },
        {
            id: 3,
            name: 'Car 3',
            description: 'Description 3',
            price: 3000,
            image: 'https://via.placeholder.com/200'
        }
    ]

    const styles = {
        viewMain: {
            height: `calc(100vh - ${APP_BAR.HEIGHT})`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: BODY.PADDING,
        },
        viewAllServices: {
            width: '100%',
            height: '60%',
        }
    }

    return (
        <Box sx={styles.viewMain}>
            <Typography variant="h4">Our Services</Typography>
            <Grid container direction='row' justifyContent='space-around' alignItems='center' spacing={{xs: 1, sm: 4}} sx={styles.viewAllServices}>
                {
                    listCars.map((car, index) => (
                        <Grid item key={index} xs={4}>
                            <CarCard car={car} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}
