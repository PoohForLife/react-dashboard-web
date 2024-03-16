import React from 'react'
import { Box } from '@mui/material'

function RightBar() {

  const styleRightBarBox = {
    width: 1,
    display: { xs: 'none', sm: 'block' },
    backgroundColor: 'white',
    zIndex: 1,
    position: 'fixed',
    height: 1,
  }

  return (
    <Box sx={styleRightBarBox}>
      RightBar
    </Box>
  )
}

export default RightBar