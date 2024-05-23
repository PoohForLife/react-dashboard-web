import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { APP_BAR, BODY } from '../../utils/config-layout'
import SwipeCard from '../../components/swipeCard/swipeCard'
import { LIST_ITEM } from '../../mockData/mockData'
import { useDispatch } from 'react-redux'
import { resetFavItem } from '../../store/favReducer'

const HomePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(resetFavItem());
    },[]);

    const didSwipeAllItems = () => {
        navigate('/summary');
    };

    const styles = {
        viewMain: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: `calc(100vh - ${APP_BAR.HEIGHT})`,
            width: '100vw',
            px: BODY.PADDING,
            overflow: 'hidden',
        },
        viewContainer: {
            width: '100%',
            maxWidth: '90vw',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
        },
    }

    return (
        <Box sx={styles.viewMain}>
            <Box sx={styles.viewContainer}>
                {LIST_ITEM.map((item, index) => (
                    <SwipeCard key={index} item={item} index={index} didSwipeAllItems={didSwipeAllItems} />
                ))}
            </Box>
        </Box>
    );
};

export default HomePage;