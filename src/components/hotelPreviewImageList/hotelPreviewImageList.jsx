import React from 'react'
import { ImageList, ImageListItem, Typography } from '@mui/material'

function HotelPreviewImageList({ previewImage }) {

  const styleImageList = {
    height: '100%',
    m: 0,
    '& .MuiImageList-root': {
        overFlow: 'hidden',
    }
  }
  const styleImageListItemMore = {
    position: 'relative',
    backgroundColor: 'black',
    '& .imageViewMore': {
        opacity: 0.3,
    },
    '& .imageViewMoreText': {
        height: '20px',
        width: '100px',
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
  }

  return (
    <ImageList cols={5} sx={styleImageList}>
        {previewImage.map((image, index) => {
        if (index > 3) { return; }
        let cols, rows;
        switch (index) {
        case 0:
            cols = 3;
            rows = 3;
        break;
        case 1:
            cols = 2;
            rows = 2;
        break;
        default:
            cols = 1;
            rows = 1;
        break;
        }
        if ((index === 3) && (previewImage.length > 4)) {
            return (
            <ImageListItem cols={cols} rows={rows} key={index} sx={styleImageListItemMore}>
                <img src={image} alt='preview_image' className='imageViewMore' draggable='false' />
                <Typography variant='subtitle1' className='imageViewMoreText'> See all </Typography>
            </ImageListItem>
            );
        }
        return (
            <ImageListItem cols={cols} rows={rows} key={index}>
                <img src={image} alt='preview_image' draggable='false' />
            </ImageListItem>
        );
        })}
    </ImageList>
  )
}

export default HotelPreviewImageList