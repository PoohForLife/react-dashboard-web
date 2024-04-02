import React from 'react'
import { Drawer, Box, Stack, Typography } from '@mui/material'
import { SIDE_BAR } from '../../utils/config-layout'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useResponsive } from '../../utils/config-responsive'
import { usePathname } from '../../utils/config-pathname'
import { setIsOpenSideBar } from '../../store/layoutReducer'
import ic_app_logo from '../../assets/ic_app_logo.svg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

function SideBar() {

  const navigate = useNavigate();
  const pathname = usePathname();
  const dispatch = useDispatch();
  
  const isUpMD = useResponsive('up', 'md');
  const { sideBar } = useSelector((state) => state.sideBar);

  const isActiveMenu = (path) => {
    return pathname.includes(path);
  }
  const clickCloseDrawer = () => {
    dispatch(setIsOpenSideBar());
  }

  useEffect(() => {
    if (pathname === '/') {
      navigate('/explore');
    }
  }, [])

  const styleDrawer = {
    zIndex: 3,
    height: '100%',
    '& .MuiDrawer-paper': {
        zIndex: 0,
        width: SIDE_BAR.WIDTH,
        backgroundColor: 'background.primaryBlue',
        borderTopRightRadius: '30px',
        borderBottomRightRadius: '30px',
    }
  }
  const styleLogoBox = {
    height: '30px',
    width: '30px',
    position: 'absolute',
    left: `calc(50% - 15px)`,
    top: '32px',
    justifyContent: 'center',
    display: isUpMD ? 'block' : 'none',
  }
  const styleContentStack = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }
  const styleMenuBox = {
    textDecoration: 'none',
    height: '70px',
    width: '70px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transition: 'transform 0.4s ease-in-out',
        backgroundColor: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        transform: 'scale(1.1)',
        '& .menuItem': { 
            color: 'background.primaryBlue',
        },
    },
  }
  const styleMenuBoxActive = {
    textDecoration: 'none',
    height: '70px',
    width: '70px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    transition: '0.3s',
    backgroundColor: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    '& .menuItem': { 
        color: 'background.primaryBlue',
    },
  }
  const styleLogoMenuSizeBox = {
    width: '24px',
    height: '24px',
    userSelect: 'none',
    color: 'white',
  }
  const styleTypography = {
    color: 'text.sideBar',
    userSelect: 'none',
  }

  return (
    <Drawer variant={isUpMD ? 'permanent' : 'temporary'} open={sideBar.isOpen} onClose={() => clickCloseDrawer()} sx={styleDrawer}>
        <Box component='img' alt='logo_image' src={ic_app_logo} sx={styleLogoBox} draggable={false} />
        <Stack spacing={isUpMD ? 4 : 2} sx={styleContentStack}>
            <Box sx={isActiveMenu('/home') ? styleMenuBoxActive : styleMenuBox} component='a' href='/home'>
                <HomeOutlinedIcon className='menuItem' sx={styleLogoMenuSizeBox} />
                <Typography className='menuItem' variant='caption' sx={styleTypography}>
                    Home
                </Typography>
            </Box>
            <Box sx={isActiveMenu('/explore') ? styleMenuBoxActive : styleMenuBox} component='a' href='/explore'>
                <SearchOutlinedIcon className='menuItem' id='menuItemExplore' sx={styleLogoMenuSizeBox} />
                <Typography className='menuItem' variant='caption' sx={styleTypography}>
                    Explore
                </Typography>
            </Box>
            <Box sx={isActiveMenu('/trip') ? styleMenuBoxActive : styleMenuBox} component='a' href='/trip'>
                <FavoriteBorderOutlinedIcon className='menuItem' sx={styleLogoMenuSizeBox} />
                <Typography className='menuItem' variant='caption' sx={styleTypography}>
                    Trips
                </Typography>
            </Box>
            <Box sx={isActiveMenu('/profile') ? styleMenuBoxActive : styleMenuBox} component='a' href='/profile'>
                <PersonOutlineOutlinedIcon className='menuItem' sx={styleLogoMenuSizeBox} />
                <Typography className='menuItem' variant='caption' sx={styleTypography}>
                    Profile
                </Typography>
            </Box>
        </Stack>
    </Drawer>
  )
}

export default SideBar