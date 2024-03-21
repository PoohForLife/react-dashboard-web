import { Stack } from '@mui/material'
import React from 'react'
import FeedCard from '../../components/feedCard/feedCard'

function Home() {
    
  const styleStackFeed = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    p: 2,
  }

  return (
    <Stack sx={styleStackFeed} spacing={4}>
        <FeedCard />
        <FeedCard />
        <FeedCard />
    </Stack>
  )
}

export default Home