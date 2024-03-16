import React from 'react'
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useSelector } from 'react-redux'
import PeopleIcon from '@mui/icons-material/People'
import FeedIcon from '@mui/icons-material/Feed'
import SettingsIcon from '@mui/icons-material/Settings'

function SideBar() {

  const { sideBar } = useSelector((state) => state.sideBar);

  const styleSideBarBox = {
    width: { xs: '70%', sm: '20%' },
    height: 1,
    zIndex: 1,
    transform: { xs: sideBar.isOpen ? 'translateX(0)' : 'translateX(-100%)', sm: 'translateX(0)' },
    transition: '0.3s',
    position: 'fixed',
    backgroundColor: 'white',
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