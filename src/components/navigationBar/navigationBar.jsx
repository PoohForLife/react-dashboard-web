import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppBar, Toolbar, Badge, Stack, IconButton, Avatar, Box, InputBase, Tabs, Tab, Tooltip, Grid } from '@mui/material'
import { setIsOpenSideBar } from '../../store/layoutReducer'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailIcon from '@mui/icons-material/Mail'
import SearchIcon from '@mui/icons-material/Search'
import WindowIcon from '@mui/icons-material/Window'
import HomeIcon from '@mui/icons-material/Home'
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
import StoreIcon from '@mui/icons-material/Store'
import GroupsIcon from '@mui/icons-material/Groups'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import ic_logo_facebook from '../../assets/ic_logo_facebook.png'
import ic_profile_picture from '../../assets/ic_profile_picture.jpeg'
import { APP_BAR } from '../../utils/config-layout'
import { useResponsive } from '../../utils/config-responsive'

function NavigationBar() {
  
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const isDownSM = useResponsive('down', 'sm');
  const isDownLG = useResponsive('down', 'lg');

  const clickTab = (newValue) => {
    setValue(newValue);
  }
  const clickSideBarIcon = () => {
    dispatch(setIsOpenSideBar());
  }

  const styleAppBar = {
    height: APP_BAR.HEIGHT,
  }
  const styleToolbar = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  }
  const styleGridContainer = {
    height: '100%',
    width: '100%',
  }
  const styleGridLeft = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  }
  const styleGridMiddle = {
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  }
  const styleGridRight = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  }
  const styleLogoImage = {
    height: 40,
    width: 40,
    display: isDownSM ? 'none' : 'flex',
  }
  const styleSideMenuForXS = {
    height: 40,
    width: 40,
    color: 'black',
    display: isDownSM ? 'block' : 'none',
  }
  const styleMenuBox = {
    height: 40,
    width: 40,
    backgroundColor: 'background.facebookGrey',
  }
  const styleMenuIcon = {
    height: 24,
    width: 24,
    alignSelf: 'center',
    color: 'black',
  }
  const styleProfileIcon = {
    height: 40,
    width: 40,
    alignSelf: 'center',
  }
  const styleSearchBox = {
    height: 40,
    width: isDownSM ? 40 : 250,
    borderRadius: '999px',
    backgroundColor: 'background.facebookSearchLightGrey',
    alignSelf: 'center',
    px: 1,
  }
  const styleSearchIcon = {
    height: 24,
    width: 24,
    alignSelf: 'center',
    color: 'background.facebookSearchGrey',
  }
  const styleSearchTextField = {
    height: '100%',
    width: '100%',
    borderRadius: '999px',
    backgroundColor: 'backround.facebookSearchLightGrey',
    display: isDownSM ? 'none' : 'flex',
    '& .MuiInputBase-input::placeholder': {
      color: 'background.facebookSearchGrey',
      opacity: 1,
    },
  }
  const styleTabs = {
    width: '100%',
    display: isDownLG ? 'none' : 'flex',
    '& .MuiTabs-flexContainer': {
      justifyContent: 'center',
      height: '100%',
    },
    '& .MuiButtonBase-root': {
      borderRadius: '10px',
      height: '50%',
      alignSelf: 'center',
    },
    '& .MuiButtonBase-root:hover': {
      backgroundColor: 'background.facebookSearchLightGrey',
    }
  }

  return (
    <AppBar sx={styleAppBar} position='fixed'>
      <Toolbar sx={styleToolbar}>
        <Grid container sx={styleGridContainer}>
          <Grid item xs={3} sx={styleGridLeft}>
            <Stack direction='row' spacing={1}>
              <Box component='img' src={ic_logo_facebook} sx={styleLogoImage} />
              <IconButton sx={styleSideMenuForXS} onClick={() => clickSideBarIcon()}>
                <MenuIcon sx={styleMenuIcon} />
              </IconButton>

              <Stack direction='row' sx={styleSearchBox} spacing={1}>
                <SearchIcon sx={styleSearchIcon} />
                <InputBase sx={styleSearchTextField} placeholder='Search Facebook' />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={6} sx={styleGridMiddle}>
            <Tabs sx={styleTabs} value={value} onChange={(event, value) => clickTab(value)}>
              <Tooltip title='Home' placement='bottom'>
                <Tab icon={<HomeIcon />} />    
              </Tooltip>
              <Tooltip title='Video' placement='bottom'>
                <Tab icon={<PersonalVideoIcon />} />
              </Tooltip>
              <Tooltip title='Marketplace' placement='bottom'>
                <Tab icon={<StoreIcon />} />
              </Tooltip>
              <Tooltip title='Groups' placement='bottom'>
                <Tab icon={<GroupsIcon />} />
              </Tooltip>
              <Tooltip title='Gaming' placement='bottom'>
                <Tab icon={<SportsEsportsIcon />} />
              </Tooltip>
            </Tabs>
          </Grid>

          <Grid item xs={3} sx={styleGridRight}>
            <Stack direction='row' spacing={1}>
              <IconButton sx={styleMenuBox}>
                <Badge badgeContent={0} color='error'>
                  <WindowIcon sx={styleMenuIcon} />
                </Badge>
              </IconButton>
              <IconButton sx={styleMenuBox}>
                <Badge badgeContent={2} color='error'>
                  <MailIcon sx={styleMenuIcon} />
                </Badge>
              </IconButton>
              <IconButton sx={styleMenuBox}>
                <Badge badgeContent={4} color='error'>
                  <NotificationsIcon sx={styleMenuIcon} />
                </Badge>
              </IconButton>
              <IconButton sx={styleMenuBox}>
                <Avatar sx={styleProfileIcon} alt='account_image' src={ic_profile_picture} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationBar