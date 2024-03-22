import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, CardHeader, Avatar, IconButton, Box, Stack, ListItemText, ListItemButton, Divider } from '@mui/material'
import { APP_BAR } from '../../utils/config-layout'
import landscape from '../../assets/landscape.jpg'
import ic_profile_picture from '../../assets/ic_profile_picture.jpeg'
import ic_emoji_smile from '../../assets/ic_emoji_smile.png'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'

function FeedCard() {

  const styleCard = {
    width: '100%',
  }
  const styleCardMedia = {
    height: '30vh',
  }
  const styleLeftListItemIconBox = {
    height: APP_BAR.ICON_BUTTON.HEIGHT,
    width: APP_BAR.ICON_BUTTON.WIDTH,
    backgroundColor: APP_BAR.ICON_BUTTON.BACKGROUND_COLOR,
    mr: 1,
  }
  const styleCardHeader = {
    p: 2,
    pb: 0,
    '& .MuiCardHeader-action': {
      m: 0,
    },
  }
  const styleCaptionBox = {
    px: 2,
    py: 1,
  }
  const styleContentBox = {
    p: 2,
  }
  const styleTotalLikeBox = {
    display: 'flex',
    justifyContent: 'space-between',
  }
  const styleTotalLikeEmoji = {
    height: 20,
    width: 20,
  }
  const styleTotalLikeText = {
    alignSelf: 'center',
    color: 'text.secondary',
    textDecoration: 'none',
    '&:hover': {
      color: 'text.primary',
      textDecoration: 'underline',
    }
  }
  const styleLikeActionBox = {
    display: 'flex',
    flexDirection: 'row',
  }
  const styleLikeActionListItemButton = {
    display: 'flex',
    justifyContent: 'center',
  }
  const styleLikeActionIcon = {
    height: 20,
    width: 20,
    alignSelf: 'center',
    color: 'text.secondary',
  }
  const styleLikeActionListItemText = {
    color: 'text.secondary',
  }

  const avatarCardHeader = (
    <IconButton sx={styleLeftListItemIconBox} disableRipple>
      <Avatar alt='account_image' src={ic_profile_picture} />
    </IconButton>
  )
  const actionCardHeader = (
    <IconButton aria-label='settings'>
      <MoreHorizOutlinedIcon />
    </IconButton>
  )

  return (
    <Card sx={styleCard}>
      <CardHeader sx={styleCardHeader} avatar={avatarCardHeader} action={actionCardHeader} title='Pubordee Leechitcham' subheader='September 14, 2016' />
      <Box sx={styleCaptionBox}>
        <Typography variant='caption' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook.
        </Typography>
      </Box>
      <CardMedia sx={styleCardMedia} component='img' image={landscape} alt='landscape_image' />
      <Stack direction='column' spacing={1} sx={styleContentBox}>
        <Box sx={styleTotalLikeBox}>
          <Stack direction='row' spacing={1}>
            <Box src={ic_emoji_smile} alt='smile_img' component='img' sx={styleTotalLikeEmoji} />
            <Typography variant='caption' component='a' href='#' sx={styleTotalLikeText}>
              12k
            </Typography>
          </Stack>
          <Stack direction='row' spacing={1}>
            <Typography variant='caption' component='a' href='#' sx={styleTotalLikeText}>
              10 comments
            </Typography>
            <Typography variant='caption'component='a' href='#' sx={styleTotalLikeText}>
              40 shares
            </Typography>
          </Stack>
        </Box>

        <Divider variant='middle' />
        
        <Box sx={styleLikeActionBox}>
          <ListItemButton sx={styleLikeActionListItemButton}>
            <Stack direction='row' spacing={1}>
              <ThumbUpOutlinedIcon sx={styleLikeActionIcon} />
              <ListItemText primary="Like" sx={styleLikeActionListItemText} />
            </Stack>
          </ListItemButton>
          <ListItemButton sx={styleLikeActionListItemButton}>
            <Stack direction='row' spacing={1}>
              <ModeCommentOutlinedIcon sx={styleLikeActionIcon} />
              <ListItemText primary="Comment" sx={styleLikeActionListItemText} />
            </Stack>
          </ListItemButton>
          <ListItemButton sx={styleLikeActionListItemButton}>
            <Stack direction='row' spacing={1}>
              <ShareOutlinedIcon sx={styleLikeActionIcon} />
              <ListItemText primary="Share" sx={styleLikeActionListItemText} />
            </Stack>
          </ListItemButton>
        </Box>
      </Stack>
    </Card>
  )
}

export default FeedCard