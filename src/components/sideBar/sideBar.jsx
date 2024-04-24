import React from 'react'
import { Drawer, Box, Stack, Typography, ListItemButton, IconButton } from '@mui/material'
import { SIDE_BAR } from '../../utils/config-layout'
import { useSelector, useDispatch } from 'react-redux'
import { useResponsive } from '../../utils/config-responsive'
import { setIsOpenSideBar } from '../../store/layoutReducer'
import MenuIcon from '@mui/icons-material/Menu'

function SideBar() {

  const dispatch = useDispatch();
  
  const isUpMD = useResponsive('up', 'md');
  const { sideBar } = useSelector((state) => state.sideBar);

  const clickCloseDrawer = () => {
    dispatch(setIsOpenSideBar());
  }

  const styles = {
    viewDrawer: {
      zIndex: 3,
      maxHeight: SIDE_BAR.HEIGHT,
      '& .MuiDrawer-paper': {
          zIndex: 0,
          width: SIDE_BAR.WIDTH,
          backgroundColor: 'colors.primaryBlue',
          borderBottomLeftRadius: SIDE_BAR.BORDER_RAIDUS,
          borderBottomRightRadius: SIDE_BAR.BORDER_RAIDUS,
      }
    },
    viewLogo: {
      height: '30px',
      width: '30px',
      position: 'absolute',
      left: `calc(50% - 15px)`,
      top: '32px',
      justifyContent: 'center',
      display: isUpMD ? 'block' : 'none',
    },
    viewContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      py: 2,
    },
    viewMenu: {
      textDecoration: 'none',
      height: '40px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textMenu: {
      color: 'colors.primaryLightGrey',
      alignSelf: 'center',
      cursor: 'pointer',
      draggable: false,
    }
  };

  return (
    <Drawer variant={'temporary'} open={sideBar.isOpen} anchor='top' onClose={() => clickCloseDrawer()} sx={styles.viewDrawer}>
        <Stack spacing={1} sx={styles.viewContent}>
          <IconButton onClick={() => clickCloseDrawer()}>
            <MenuIcon />
          </IconButton>
          <ListItemButton sx={styles.viewMenu}>
              <Typography className='menuItem' variant='caption' sx={styles.textMenu}>Home</Typography>
          </ListItemButton>
          <ListItemButton sx={styles.viewMenu}>
              <Typography className='menuItem' variant='caption' sx={styles.textMenu}>Products</Typography>
          </ListItemButton>
          <ListItemButton sx={styles.viewMenu}>
              <Typography className='menuItem' variant='caption' sx={styles.textMenu}>Gallery</Typography>
          </ListItemButton>
          <ListItemButton sx={styles.viewMenu}>
              <Typography className='menuItem' variant='caption' sx={styles.textMenu}>Reviews</Typography>
          </ListItemButton>
          <ListItemButton sx={styles.viewMenu}>
              <Typography className='menuItem' variant='caption' sx={styles.textMenu}>Contact Us</Typography>
          </ListItemButton>
        </Stack>
    </Drawer>
  )
}

export default SideBar