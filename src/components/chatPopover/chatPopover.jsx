import React from 'react'
import { Badge, IconButton } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import { APP_BAR } from '../../utils/config-layout'

function ChatPopover() {

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

  return (
    <IconButton sx={styleIconButton}>
      <Badge badgeContent={2} color='error'>
        <MailIcon sx={styleIconImage} />
      </Badge>
    </IconButton>
  )
}

export default ChatPopover