import React from 'react'
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Drawer } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { setIsOpenSideBar } from '../../store/layoutReducer'
import PeopleIcon from '@mui/icons-material/People'
import FeedIcon from '@mui/icons-material/Feed'
import SettingsIcon from '@mui/icons-material/Settings'
import { useResponsive } from '../../utils/config-responsive'
import { APP_BAR } from '../../utils/config-layout'

function SideBar() {

  const dispatch = useDispatch();
  const isDownSM = useResponsive('down', 'sm');
  const isUpXS = useResponsive('up', 'sm');
  const { sideBar } = useSelector((state) => state.sideBar);
  const clickCloseDrawer = () => {
    dispatch(setIsOpenSideBar());
  }

  const styleDrawer = {
    height: 1,
    zIndex: 1,
    '& .MuiDrawer-paper': {
      backgroundColor: isDownSM ? 'white' : 'background.transparent',
      width: isDownSM ? '70%' : '20%',
      border: 'none',
      zIndex: 0,
    },
  }
  const styleList = {
    mt: APP_BAR.HEIGHT,
  }

  return (
    <Drawer variant={isUpXS ? 'permanent' : 'temporary'} open={sideBar.isOpen} onClose={() => clickCloseDrawer()} sx={styleDrawer}>
      <List sx={styleList}>
        <ListItemButton component='a' href='#'>
            <ListItemIcon>
                <FeedIcon />
            </ListItemIcon>
            <ListItemText primary="Feed" />
        </ListItemButton>

        <ListItemButton component='a' href='#'>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Friend" />
        </ListItemButton>

        <ListItemButton component='a' href='#'>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
        </ListItemButton>
      </List>
    </Drawer>
  )
}

export default SideBar