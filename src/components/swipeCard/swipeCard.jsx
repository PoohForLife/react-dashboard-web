import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import { Box, Typography } from '@mui/material'
import { useResponsive } from '../../utils/config-responsive'
import { useDispatch } from 'react-redux'
import { setFavItem, addFavItem } from '../../store/favReducer'

const SwipeCard = ({ name, url, index, didSwipeAllItems }) => {

    const dispatch = useDispatch();
    const isUpSM = useResponsive('up', 'sm');
    const [swipedRight, setSwipedRight] = useState([]);
    const percentHeight = isUpSM ? '50vh' : '40vh';
    
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction);
        if (direction === 'right') {
            setSwipedRight(prev => [...prev, name]);
            dispatch(setFavItem(swipedRight));
        }
    };

    const onCardLeftScreen = (myIdentifier) => {
        if (index === 0) {
            didSwipeAllItems();
        }
    };

    const styles = {
        viewTinderCard: {
            height: '100%',
            width: '100%',
        },
        viewCard: {
            top: `calc(50% - (${percentHeight}/2))`,
            left: `calc(50% - (${percentHeight}/2))`,
            position: 'absolute',
            borderRadius: '20px',
            boxShadow: '0px 18px 53px -5px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: 16,
            height: percentHeight,
            width: percentHeight,
        },
        textTitle: {
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            userSelect: 'none',
            draggable: 'false',
        },
    }
  
    return (
        <TinderCard sx={styles.viewTinderCard} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen(name)} preventSwipe={['up', 'down']} >
            <Box sx={{ ...styles.viewCard, backgroundImage: `url(${url})` }}>
                <Typography variant='h6' sx={styles.textTitle}>{name}</Typography>
            </Box>
        </TinderCard>
    );
};

export default SwipeCard;