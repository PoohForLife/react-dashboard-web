import React from 'react'
import { TextField, Stack, Box, Typography, IconButton } from '@mui/material'
import { COMPONENT } from '../../utils/config-layout'
import { useDispatch } from 'react-redux'
import { setHotelBookingGuestFirstName } from '../../store/bookingReducer'
import { setHotelBookingGuestLastName } from '../../store/bookingReducer'
import { setHotelBookingGuestEmail } from '../../store/bookingReducer'
import { setHotelBookingGuestMobileNumber } from '../../store/bookingReducer'
import { removeHotelBookingGuest } from '../../store/bookingReducer'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

function AddGuestCard({ guest, index, isCanDelete }) {
  
  const dispatch = useDispatch();

  const onChangeFirstName = (firstName) => {
    dispatch(setHotelBookingGuestFirstName({ index: index, value: firstName }));
  }
  const onChangeListName = (lastName) => {
    dispatch(setHotelBookingGuestLastName({ index: index, value: lastName }));
  }
  const onChangeEmail = (email) => {
    dispatch(setHotelBookingGuestEmail({ index: index, value: email }));
  }
  const onChangeMobileNumber = (mobileNumber) => {
    if (!isValidMobileNumber(mobileNumber)) {
      mobileNumber = mobileNumber.slice(0, 10);
    }
    dispatch(setHotelBookingGuestMobileNumber({ index: index, value: mobileNumber }));
  }
  const clickDeleteGuest = (index) => {
    dispatch(removeHotelBookingGuest(index));
  }
  const isValidMobileNumber = (mobileNumber) => {
    const isCorrectLength = mobileNumber.length <= 10;
    const isCorrectFormat = /^[0-9]*$/.test(mobileNumber);
    return isCorrectFormat && isCorrectLength;
  }

  const styleTitleText = {
    py: 2,
    textAlign: 'center',
  }
  const styleDeleteButton = {
    width: '32px',
    height: '32px',
    display: isCanDelete ? 'flex' : 'none',
    alignSelf: 'center',
    '&:hover': {
      backgroundColor: 'background.alphaWhite',
      animation: 'rotate 0.5s ease-in-out infinite alternate',
    },
    '@keyframes rotate': {
      '0%': {
        transform: 'rotate(-15deg)',
      },
      '100%': {
        transform: 'rotate(15deg)',
      },
    },
  }

  return (
    <Box display='flex' flexDirection='column'>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
            <Typography variant='subtitle2' sx={styleTitleText}>Guest {index + 1}</Typography>
            <IconButton sx={styleDeleteButton} onClick={() => clickDeleteGuest(index)}>
                <DeleteOutlinedIcon color='error' />
            </IconButton>
        </Box>
        <Stack direction='column' spacing={1}>
            <Stack direction='row' spacing={1}>
                <TextField label='First Name' variant='outlined' fullWidth value={guest.firstName} onChange={(e) => onChangeFirstName(e.target.value)} />
                <TextField label='Last Name' variant='outlined' fullWidth value={guest.lastName} onChange={(e) => onChangeListName(e.target.value)} />
            </Stack>
            <Stack direction='row' spacing={1}>
                <TextField label='Email Address' variant='outlined' fullWidth value={guest.email} onChange={(e) => onChangeEmail(e.target.value)} />
                <TextField label='Mobile Number' variant='outlined' type='number' fullWidth value={guest.mobileNumber} onChange={(e) => onChangeMobileNumber(e.target.value)} />
            </Stack>
        </Stack>
    </Box>
  )
}

export default AddGuestCard