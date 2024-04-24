import React from 'react'
import { AppBar, IconButton, Toolbar, Box, Stack, Typography, colors } from '@mui/material'
import { useResponsive } from '../../utils/config-responsive'
import { useDispatch } from 'react-redux'
import { setIsOpenSideBar } from '../../store/layoutReducer'
import { APP_BAR } from '../../utils/config-layout'
import MenuIcon from '@mui/icons-material/Menu'

function NavigationBar() { 

  const isUpMD = useResponsive('up', 'md');
  const dispatch = useDispatch();

  const clickSideBarIcon = () => {
    dispatch(setIsOpenSideBar());
  }

  const styles = {
    viewAppBar: {
      display: 'block',
      height: APP_BAR.HEIGHT,
      backgroundColor: 'colors.primaryWhite',
      zIndex: 2,
    },
    viewToolbar: {
      display: 'flex',
      height: 1,
      justifyContent: 'space-between',
    },
    viewLogo: {
      height: '30px',
      width: '120px',
      color: 'white',
      alignSelf: 'center',
    },
    viewSubMenu: {
      display: isUpMD ? 'flex' : 'none',
      flexDireaction: 'row',
    },
    viewMoreIcon: {
      display: isUpMD ? 'none' : 'flex',
    },
    textMenu: {
      color: 'colors.primaryLightGrey',
      alignSelf: 'center',
      draggable: false,
      cursor: 'pointer',
      '&:hover': {
        color: 'colors.primaryBlue',
      },
    }
  }


  return (
    <AppBar position='fixed' sx={styles.viewAppBar}>
        <Toolbar sx={styles.viewToolbar}>
          <Box component='img' alt='logo_image' src='https://via.placeholder.com/100' sx={styles.viewLogo} draggable={false} />
          <Stack direction='row' spacing={2} sx={styles.viewSubMenu}>
            <Typography variant='subtitle2' sx={styles.textMenu}>Home</Typography>
            <Typography variant='subtitle2' sx={styles.textMenu}>Products</Typography>
            <Typography variant='subtitle2' sx={styles.textMenu}>Gallery</Typography>
            <Typography variant='subtitle2' sx={styles.textMenu}>Reviews</Typography>
            <Typography variant='subtitle2' sx={styles.textMenu}>Contact Us</Typography>
          </Stack>
          <IconButton onClick={() => clickSideBarIcon()} sx={styles.viewMoreIcon}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default NavigationBar