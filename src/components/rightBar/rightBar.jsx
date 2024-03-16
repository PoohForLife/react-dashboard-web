import React from 'react'
import { Avatar, Box, Typography, AvatarGroup , Stack, Container, ImageList, ImageListItem, List, ListItem, ListItemText, ListItemAvatar, Divider } from '@mui/material'
import ic_avatar_cat from '../../assets/ic_avatar_cat.jpeg'

function RightBar() {

  const mockData = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1551316679-9c6ae9dec224',
      title: 'Breakfast',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1551214012-84f95e060dee',
      title: 'Burger',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1551446591-142875a901a1',
      title: 'Camera',
    },
  ]

  const styleRightBarBox = {
    width: '20%',
    height: 1,
    display: { xs: 'none', sm: 'flex' },
    backgroundColor: 'white',
    zIndex: 1,
    position: 'fixed',
    p: 2
  }
  const styleAvatarGroup = {
    justifyContent: 'start',
  }
  const styleImageList = {
    width: 1,
    height: '50%',
  }
  const styleList = {
    width: '100%', 
    maxWidth: 360, 
    bgcolor: 'background.paper'
  }
  const secondaryText = (
    <>
      <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
        Ali Connors 
      </Typography>
      <Typography sx={{ display: 'inline' }} component="span" variant="caption" color="text.secondary">
      — I'll be in your neighborhood doing errands this…
      </Typography>
    </>
  )

  return (
    <Box sx={styleRightBarBox}>
      <Stack spacing={2}>
        <Container>
          <Typography variant='subtitle1'>Online Friends</Typography>
          <AvatarGroup sx={styleAvatarGroup} max={5}>
            <Avatar alt='avatar 1' src={ic_avatar_cat} />
            <Avatar alt='avatar 1' src={ic_avatar_cat} />
            <Avatar alt='avatar 1' src={ic_avatar_cat} />
            <Avatar alt='avatar 1' src={ic_avatar_cat} />
            <Avatar alt='avatar 1' src={ic_avatar_cat} />
            <Avatar alt='avatar 1' src={ic_avatar_cat} />
            <Avatar alt='avatar 1' src={ic_avatar_cat} />
            <Avatar alt='avatar 1' src={ic_avatar_cat} />
          </AvatarGroup>  
        </Container>

        <Container>
          <Typography variant='subtitle1'>Lastest Photos</Typography>
          <ImageList sx={styleImageList} cols={3}>
            {mockData.map((item) => 
              <ImageListItem key={item.id}>
                <img alt={item.title} src={item.src} />
              </ImageListItem>
            )}
          </ImageList>
        </Container>

        <Container>
          <Typography variant='subtitle1'>Lastest Conversation</Typography>
          <List sx={styleList}>
            <ListItem alignItems='flex-start' disablePadding>
              <ListItemAvatar>
                <Avatar alt='cat avatar' src={ic_avatar_cat} />
              </ListItemAvatar>
              <ListItemText primary='Brunch this weekend?' secondary={secondaryText} />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem alignItems='flex-start' disablePadding>
              <ListItemAvatar>
                <Avatar alt='cat avatar' src={ic_avatar_cat} />
              </ListItemAvatar>
              <ListItemText primary='Brunch this weekend?' secondary={secondaryText} />
            </ListItem>
            <Divider variant='inset' component='li' />
            <ListItem alignItems='flex-start' disablePadding>
              <ListItemAvatar>
                <Avatar alt='cat avatar' src={ic_avatar_cat} />
              </ListItemAvatar>
              <ListItemText primary='Brunch this weekend?' secondary={secondaryText} />
            </ListItem>
          </List>
        </Container>
      </Stack>   
    </Box>
  )
}

export default RightBar