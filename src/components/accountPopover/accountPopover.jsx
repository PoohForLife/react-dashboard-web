import React from 'react'
import { useState } from 'react'
import { Avatar, Box, IconButton, Popover, List, ListItemIcon, ListItemButton, ListItemText, Stack, Typography, Grid, Paper, Divider } from '@mui/material'
import { APP_BAR } from '../../utils/config-layout'
import ic_profile_picture from '../../assets/ic_profile_picture.jpeg'
import SettingsIcon from '@mui/icons-material/Settings'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import HelpIcon from '@mui/icons-material/Help'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import FeedbackIcon from '@mui/icons-material/Feedback'
import LogoutIcon from '@mui/icons-material/Logout'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'

function AccountPopover() {

  const [open, setOpen] = useState(null);
  const clickOpenAccount = (event) => {
    setOpen(event.currentTarget);
  }
  const clickCloseAccount = () => {
    setOpen(null);
  }

  const styleIconButton = {
    height: APP_BAR.ICON_BUTTON.HEIGHT,
    width: APP_BAR.ICON_BUTTON.WIDTH,
    backgroundColor: APP_BAR.ICON_BUTTON.BACKGROUND_COLOR,
  }
  const styleIconImage = {
    height: APP_BAR.ICON_IMAGE.HEIGHT,
    width: APP_BAR.ICON_IMAGE.WIDTH,
    alignSelf: APP_BAR.ICON_IMAGE.ALIGN_SELF,
    color: APP_BAR.ICON_IMAGE.COLOR,
  }
  const popoverAnchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
  }
  const popoverTransformOrigin = {
    vertical: 'top',
    horizontal: 'right',
  }
  const styleAccountBox = {
    height: '50%',
    width: '100%',
    p: 1,
  }
  const styleLeftListItemIconBox = {
    ...styleIconButton,
    mr: 1,
  }
  const styleRightListItemIcon = {
    display: 'flex',
    justifyContent: 'flex-end',
  }
  const styleGridContainer = {
    display: 'flex',
    gap: '2px',
    px: '16px',
  }
  const styleSwitchAccountDivider = {
    my: 1,
  }
  const styleSwitchAccountBox = {
    px: 2,
    py: 1,
  }
  const styleSwitchAccountListItemButton = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'background.facebookGrey',
    borderRadius: 1,
  }

  return (
    <Box>
      <IconButton onClick={(e) => clickOpenAccount(e)} sx={styleIconButton}>
        <Avatar alt='account_image' src={ic_profile_picture} />
      </IconButton>

      <Popover open={Boolean(open)} onClose={() => clickCloseAccount()} anchorEl={open} anchorOrigin={popoverAnchorOrigin} transformOrigin={popoverTransformOrigin}>
        <Box sx={styleAccountBox}>
          <Paper elevation={3}>
            <ListItemButton component='a' href='#' disableRipple>
              <IconButton sx={styleLeftListItemIconBox} disableRipple>
                <Avatar alt='account_image' src={ic_profile_picture} />
              </IconButton>
              <ListItemText primary="Pubordee Leechitcham" />
            </ListItemButton>
            <Divider variant='middle' sx={styleSwitchAccountDivider} />
            <Box sx={styleSwitchAccountBox}>
              <ListItemButton sx={styleSwitchAccountListItemButton}>
                <Stack direction='row' spacing={1}>
                  <ManageAccountsIcon sx={styleIconImage} />
                  <ListItemText primary="Pubordee Leechitcham" />
                </Stack>
              </ListItemButton>
            </Box>
          </Paper>

          <List>
            <ListItemButton component='a' href='#'>
              <IconButton sx={styleLeftListItemIconBox} disableRipple>
                <SettingsIcon sx={styleIconImage} />
              </IconButton>
              <ListItemText primary="Settings & privacy" />
              <ListItemIcon sx={styleRightListItemIcon}>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton component='a' href='#'>
              <IconButton sx={styleLeftListItemIconBox} disableRipple>
                <HelpIcon sx={styleIconImage} />
              </IconButton>
              <ListItemText primary="Help & support" />
              <ListItemIcon sx={styleRightListItemIcon}>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton component='a' href='#'>
              <IconButton sx={styleLeftListItemIconBox} disableRipple>
                <DarkModeIcon sx={styleIconImage} />
              </IconButton>
              <ListItemText primary="Display & accessibility" />
              <ListItemIcon sx={styleRightListItemIcon}>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton component='a' href='#'>
              <IconButton sx={styleLeftListItemIconBox} disableRipple>
                <FeedbackIcon sx={styleIconImage} />
              </IconButton>
              <ListItemText primary="Give feedback" />
              <ListItemIcon sx={styleRightListItemIcon}>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItemButton>
            
            <ListItemButton component='a' href='#'>
              <IconButton sx={styleLeftListItemIconBox} disableRipple>
                <LogoutIcon sx={styleIconImage} />
              </IconButton>
              <ListItemText primary="Log Out" />
              <ListItemIcon sx={styleRightListItemIcon}>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItemButton>

            <Grid container sx={styleGridContainer}>
              <Typography variant='caption' color='text.secondary'>Privacy</Typography>
              <Typography variant='caption' color='text.secondary'>·</Typography>
              <Typography variant='caption' color='text.secondary'>Terms</Typography>
              <Typography variant='caption' color='text.secondary'>·</Typography>
              <Typography variant='caption' color='text.secondary'>Advertising</Typography>
              <Typography variant='caption' color='text.secondary'>·</Typography>
              <Typography variant='caption' color='text.secondary'>Ad Choices</Typography>
              <Typography variant='caption' color='text.secondary'>·</Typography>
              <Typography variant='caption' color='text.secondary'>Cookies</Typography>
              <Typography variant='caption' color='text.secondary'>·</Typography>
              <Typography variant='caption' color='text.secondary'>More</Typography>
              <Typography variant='caption' color='text.secondary'>·</Typography>
              <Typography variant='caption' color='text.secondary'>Pooh @ 2024</Typography>
            </Grid>
          </List>
        </Box>
      </Popover>
    </Box>
  )
}

export default AccountPopover