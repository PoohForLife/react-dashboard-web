import React from 'react'
import { Box, Typography, Stack, IconButton, Button } from '@mui/material'
import { APP_BAR, BODY } from '../../utils/config-layout'
import { useResponsive } from '../../utils/config-responsive'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

export default function HomePage() {
    
    const isUpSM = useResponsive('up', 'sm');

    const styles = {
        viewMain: {
            display: 'flex',
            flexDirection: isUpSM ? 'row' : 'column-reverse',
            justifyContent: 'center',
            alignItems: 'center',
            height: `calc(100vh - ${APP_BAR.HEIGHT})`,
            px: BODY.PADDING,
        },
        viewInformation: {
            height: '100%',
            flex: 1,
        },
        viewPreviewImage: {
            height: '100%',
            width: '100%',
            flex: 2,
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
        },
        viewText: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            p: isUpSM ? 4 : 2,
        },
        viewExploreButton: {
            height: isUpSM ? '10%' : '20%',
            width: '50%',
            my: isUpSM ? 4 : 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        viewSocialMediaIcon: {
            color: 'colors.primaryTheme',
        },
        viewRightBackground: {
            width: '70%',
            height: '100%',
            backgroundColor: 'colors.primaryTheme',
            display: 'flex',
            alignItems: 'center',
        },
        viewImage: {
            width: '100%',
            height: '70%',
            objectFit: 'cover',
            position: 'absolute',
            right: 0,
        },
    }

    return (
        <Box sx={styles.viewMain}>
            <Box sx={styles.viewInformation}>
                <Box sx={styles.viewText}>
                    <Typography variant='h2'>Buffer free car is our Pride</Typography>
                    <Typography variant='caption'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deleniti minima obcaecati dolor quidem veritatis incidunt ea, assumenda excepturi vero dolorum. Eos voluptatum reiciendis praesentium laudantium laborum ratione qui dicta?</Typography>
                    <Button variant='contained' sx={styles.viewExploreButton}>
                        <Typography variant='h6'>Explore Services</Typography>
                    </Button>
                    <Stack direction='row' spacing={1}>
                        <IconButton sx={styles.viewSocialMediaIcon}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton sx={styles.viewSocialMediaIcon}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton sx={styles.viewSocialMediaIcon}>
                            <TwitterIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>


            <Box sx={styles.viewPreviewImage}>
                <Box sx={styles.viewRightBackground}>
                    <Box component='img' src='https://via.placeholder.com/500' alt='preview image' sx={styles.viewImage} />
                </Box> 
            </Box>
        </Box>
    )
}
