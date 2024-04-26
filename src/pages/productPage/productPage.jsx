import React from 'react'
import { Box } from '@mui/material'
import { APP_BAR, BODY } from '../../utils/config-layout'

export default function ProductPage() {

    const styles = {
        viewMain: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: `calc(100vh - ${APP_BAR.HEIGHT})`,
            px: BODY.PADDING,
        }
    }

    return (
        <Box sx={styles.viewMain}>
            <p>Product Page</p>
        </Box>
    )
}
