import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppBar, Toolbar, Badge, Stack, IconButton, Avatar, Box, InputBase, Tabs, Tab, Tooltip, Grid } from '@mui/material'
import { setIsOpenSideBar } from '../../store/layoutReducer'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import ic_logo_facebook from '../../assets/ic_logo_facebook.png'
import { useResponsive } from '../../utils/config-responsive'
import AccountPopover from '../accountPopover/accountPopover'
import NotiPopover from '../notiPopover/notiPopover'
import ChatPopover from '../chatPopover/chatPopover'
import MenuPopover from '../menuPopover/menuPopover'
import { APP_BAR } from '../../utils/config-layout'

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
    height: APP_BAR.ICON_BUTTON.HEIGHT,
    width: APP_BAR.ICON_BUTTON.WIDTH,
    display: isDownSM ? 'none' : 'flex',
  }
  const styleSideMenuForXS = {
    height: APP_BAR.ICON_BUTTON.HEIGHT,
    width: APP_BAR.ICON_BUTTON.WIDTH,
    color: APP_BAR.ICON_BUTTON.COLOR,
    display: isDownSM ? 'block' : 'none',
  }
  const styleMenuIcon = {
    height: APP_BAR.ICON_IMAGE.HEIGHT,
    width: APP_BAR.ICON_IMAGE.WIDTH,
    alignSelf: APP_BAR.ICON_IMAGE.ALIGN_SELF,
    color: APP_BAR.ICON_IMAGE.COLOR,
  }
  
  const styleSearchBox = {
    height: APP_BAR.ICON_BUTTON.HEIGHT,
    width: isDownSM ? APP_BAR.ICON_BUTTON.WIDTH : 250,
    alignSelf: APP_BAR.ICON_BUTTON.ALIGN_SELF,
    borderRadius: '999px',
    backgroundColor: 'background.facebookSearchLightGrey',
    px: 1,
  }
  const styleSearchIcon = {
    height: APP_BAR.ICON_IMAGE.HEIGHT,
    width: APP_BAR.ICON_IMAGE.WIDTH,
    alignSelf: APP_BAR.ICON_IMAGE.ALIGN_SELF,
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
                <Tab icon={<CottageOutlinedIcon />} />    
              </Tooltip>
              <Tooltip title='Video' placement='bottom'>
                <Tab icon={<PersonalVideoIcon />} />
              </Tooltip>
              <Tooltip title='Marketplace' placement='bottom'>
                <Tab icon={<StorefrontOutlinedIcon />} />
              </Tooltip>
              <Tooltip title='Groups' placement='bottom'>
                <Tab icon={<GroupsOutlinedIcon />} />
              </Tooltip>
              <Tooltip title='Gaming' placement='bottom'>
                <Tab icon={<SportsEsportsOutlinedIcon />} />
              </Tooltip>
            </Tabs>
          </Grid>

          <Grid item xs={3} sx={styleGridRight}>
            <Stack direction='row' spacing={1}>
              <MenuPopover />
              <ChatPopover />
              <NotiPopover />
              <AccountPopover />
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationBar