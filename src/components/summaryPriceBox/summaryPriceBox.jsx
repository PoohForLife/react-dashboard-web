import React from 'react'
import { Box, Typography } from '@mui/material'

function SummaryPriceBox({ pricePerNight, percentDiscount }) {
  const price = pricePerNight.toFixed(2);
  const discount = percentDiscount === undefined ? '0.00' : (pricePerNight * percentDiscount / 100).toFixed(2);
  const priceAfterDiscount = (pricePerNight - discount).toFixed(2);
  const tax = (pricePerNight * 7 / 100).toFixed(2);
  const totalAmount = ((pricePerNight * 7 / 100) + (pricePerNight - discount)).toFixed(2);

  return (
    <>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
            <Typography variant='subtitle2' color='text.placeholder'>1 room x 1 night</Typography>
            <Typography variant='subtitle2' color='background.fourthBlue'>{price}</Typography>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
            <Typography variant='subtitle2' color='text.placeholder'>Total discount</Typography>
            <Typography variant='subtitle2' color='background.fourthBlue'>{discount}</Typography>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
            <Typography variant='subtitle2' color='text.placeholder'>Price after discount</Typography>
            <Typography variant='subtitle2' color='background.fourthBlue'>{priceAfterDiscount}</Typography>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
            <Typography variant='subtitle2' color='text.placeholder'>Taxes and sevices fee</Typography>
            <Typography variant='subtitle2' color='background.fourthBlue'>{tax}</Typography>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
            <Typography variant='h6' color='text.primary'>Total Amount</Typography>
            <Typography variant='h6' color='background.primaryBlue'>{totalAmount}</Typography>
        </Box>
    </>
  )
}

export default SummaryPriceBox