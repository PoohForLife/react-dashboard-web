import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { APP_BAR, BODY } from '../../utils/config-layout'
import { useSelector } from 'react-redux'

export default function SummaryPage() {

    const { favItem } = useSelector(state => state.favItem);

    const percentHeight = '20%';

    const styles = {
        viewMain: {
            py: 4,
        },
        viewStack: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: BODY.PADDING,
            overflow: 'hidden',
        },
        viewCard: {
            borderRadius: '20px',
            boxShadow: '0px 18px 53px -5px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: 16,
            height: percentHeight,
            width: percentHeight,
        },
        textTitle: {
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            userSelect: 'none',
            draggable: 'false',
        },
    }

    return (
        <Box sx={styles.viewMain}>
            <Typography variant='h2'>Summary Page</Typography>
            <Stack direction='row' spacing={2} gridColumn={{xs: 12, sm: 12, md: 3}} flexWrap='wrap' useFlexGap sx={styles.viewStack}>
                {favItem.map((item, index) => (
                    <Box sx={{ ...styles.viewCard, backgroundImage: `url(${item.url})` }} key={index}>
                        <Typography variant='h6' sx={styles.textTitle}>{item.name}</Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}
