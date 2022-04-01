import PropTypes from 'prop-types';
import { useState } from 'react';
import { Image } from 'semantic-ui-react'

import MainCard from './MainCard';
// material-ui
import { styled } from '@mui/material/styles';
import {  Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send';
import {  Paper} from '@material-ui/core';
import image from '../../Images/member.png'

// project imports
import Button from 'semantic-ui-react';


const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: '#fff',
    margin: '1rem',
    overflow: 'hidden',
    position: 'relative',
    maxWidth: 400,
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
}));


const useStyles = makeStyles((theme) => ({

    button: {
        color: '#bbdefb' , 
        backgroundColor: '#6495ED'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 1000,
        backgroundColor: '#fff '
    },
  }));
// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const MemberCard = ({ isLoading }) => {
    const classes = useStyles();
    return (
/*         <Paper padding = {20} className={classes.paper}>
 */            
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 1 }} margin = {2}>
                        <Typography
                            margin = {2}
                            sx={{
                                fontSize: '2rem',
                                fontWeight: 500,
                                color: '#276fe6 '
                            }}
                            align='center'
                        >
                            Miembro del equipo
                        </Typography>
                        <Typography
                            margin = {2}
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: 500,
                                color: '#4f87e4 '
                            }}
                            align='center'
                        >
                            Frase identificativa o labor
                        </Typography>
                        <p></p>
                        <Box margin = {4}>
                            <Image
                            margin='3rem'
                            padding = '3rem'
                            centered
                            size='tiny'
                            src={image}
                        />
                        </Box>
                        

                    </Box>
                </CardWrapper>
            
/*         </Paper>
 */    );
};



export default MemberCard;
