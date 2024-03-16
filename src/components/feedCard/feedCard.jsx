import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, CardHeader, Avatar, IconButton } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import landscape from '../../assets/landscape.jpg'

function FeedCard() {

  const styleCard = {
    maxWidth: '70%',
  }

  const styleCardMedia = {
    height: 250,
  }

  return (
    <Card sx={styleCard}>
      <CardHeader avatar={
          <Avatar aria-label="recipe">P</Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia sx={styleCardMedia} component="img" image={landscape} alt="landscape_image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default FeedCard