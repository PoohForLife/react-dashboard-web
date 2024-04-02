import React from 'react'
import { AppBar, IconButton, Toolbar, Box } from '@mui/material'
import { useResponsive } from '../../utils/config-responsive'
import { useDispatch } from 'react-redux'
import { setIsOpenSideBar } from '../../store/layoutReducer'
import { APP_BAR } from '../../utils/config-layout'
import ic_app_logo from '../../assets/ic_app_logo.svg'

function NavigationBar() { 

  const isUpMD = useResponsive('up', 'md');
  const dispatch = useDispatch();

  const clickSideBarIcon = () => {
    dispatch(setIsOpenSideBar());
  }

  const styleAppBar = {
    display: isUpMD ? 'none' : 'block',
    height: APP_BAR.HEIGHT,
    backgroundColor: 'background.primaryBlue',
    borderBottomRightRadius: '30px',
    borderBottomLeftRadius: '30px',
    zIndex: 2,
  }
  const styleToolbar = {
    display: 'flex',
    height: 1,
    justifyContent: 'space-between',
  }
  const styleSideMenuForXS = {
    height: '30px',
    width: '30px',
    color: 'white',
  }
  const styleMenuIcon = {
    height: '24px',
    width: '24px',
    color: 'white',
    alignSelf: 'center',
  }

  return (
    <AppBar position='fixed' sx={styleAppBar}>
        <Toolbar sx={styleToolbar}>
            <IconButton sx={styleSideMenuForXS} onClick={() => clickSideBarIcon()}>
                <Box component='img' alt='logo_image' src={ic_app_logo} sx={styleMenuIcon} draggable={false} />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default NavigationBar