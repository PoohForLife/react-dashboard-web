import React from 'react'
import { Box, Typography } from '@mui/material'
import { APP_BAR, BODY } from '../../utils/config-layout'
import { getFavItem } from '../../store/favReducer'
import { useSelector } from 'react-redux'

export default function SummaryPage() {

    const favItems = useSelector(getFavItem);

    return (
        <Box>
            <Typography variant='h1'>Summary Page</Typography>
            {favItems.map((item, index) => (
                <Typography key={index} variant='h6'>{item.name}</Typography>
            ))}
        </Box>
    );
}
