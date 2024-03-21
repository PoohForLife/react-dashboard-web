import React from 'react'
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Drawer } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import setIsOpenSideBar from '../../store/layoutReducer'
import PeopleIcon from '@mui/icons-material/People'
import FeedIcon from '@mui/icons-material/Feed'
import SettingsIcon from '@mui/icons-material/Settings'
import { useResponsive } from '../../utils/config-responsive'

function SideBar() {

//   const dispatch = useDispatch();
  const isDownSM = useResponsive('down', 'sm');
  const { sideBar } = useSelector((state) => state.sideBar);
//   const clickCloseDrawer = () => {
//     dispatch(setIsOpenSideBar());
//   }

  const styleSideBarBox = {
    width: isDownSM ? '70%' : '20%',
    height: 1,
    zIndex: 1,
    transform: isDownSM ? (sideBar.isOpen ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)',
    transition: '0.3s',
    position: 'fixed',
    backgroundColor: isDownSM ? 'white' : 'background.transparent',
  }

  return (
    <Box sx={styleSideBarBox}>
        <List>
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
    </Box>
  )
}

export default SideBar