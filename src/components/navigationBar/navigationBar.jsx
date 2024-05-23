import React from 'react'
import { AppBar, Toolbar, Box } from '@mui/material'
import { useResponsive } from '../../utils/config-responsive'
import { APP_BAR } from '../../utils/config-layout'

function NavigationBar() { 

  const isUpMD = useResponsive('up', 'md');

  const styles = {
    viewAppBar: {
      display: 'block',
      height: APP_BAR.HEIGHT,
      backgroundColor: 'colors.secondaryTheme',
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
      color: 'colors.menuText',
      alignSelf: 'center',
      draggable: false,
      cursor: 'pointer',
      '&:hover': {
        color: 'colors.primaryTheme',
      },
    }
  }


  return (
    <AppBar position='fixed' sx={styles.viewAppBar}>
        <Toolbar sx={styles.viewToolbar}>
          <Box component='img' alt='logo_image' src='https://via.placeholder.com/100' sx={styles.viewLogo} draggable={false} />
        </Toolbar>
    </AppBar>
  )
}

export default NavigationBar