import React from 'react'
import { useDispatch } from 'react-redux'
import { AppBar, Toolbar, Typography, Badge, Stack, IconButton, Avatar } from '@mui/material'
import { setIsOpenSideBar } from '../../store/layoutReducer'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailIcon from '@mui/icons-material/Mail'

function NavigationBar() {

  const dispatch = useDispatch();
  const clickSideBarIcon = () => {
    dispatch(setIsOpenSideBar());
  }

  const styleToolbar = {
    display: 'flex',
    justifyContent: 'space-between',
  }
  const styleMenuTitle = {
    display: {xs: 'none', sm: 'block'},
  }
  const styleMenuIcon = {
    display: {xs: 'block', sm: 'none'},
    color: 'white',
  }
  const styleBadgeIcon = {
    color: 'white',
  }
  const styleProfileIcon = {
    height: 30,
    width: 30,
    alignSelf: 'center',
  }

  return (
    <AppBar position='sticky'>
      <Toolbar sx={styleToolbar}>
        <Typography sx={styleMenuTitle} variant='h6'>Pooh</Typography>
        <IconButton onClick={() => clickSideBarIcon()}>
          <MenuIcon sx={styleMenuIcon} />
        </IconButton>
        <Stack direction='row' spacing={1}>
          <IconButton>
            <Badge badgeContent={2} color='error'>
              <MailIcon sx={styleBadgeIcon} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color='error'>
              <NotificationsIcon sx={styleBadgeIcon} />
            </Badge>
          </IconButton>
          <Avatar sx={styleProfileIcon} alt='account_image' src='/broken-image.jpg' />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationBar