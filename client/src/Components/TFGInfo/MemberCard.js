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

  const info = [
    {
        header: 'Ana Belén Duarte',
        meta: 'Estudiante',
        imageURL: './../../Images/member.png'
    },
    {
        header: 'Alejandro Ramírez',
        meta: 'Estudiante',
        imageURL: './../../Images/member.png'
    },
    {
        header: 'Jorge del Valle',
        meta: 'Estudiante',
        imageURL: './../../Images/member.png'
    },
    {
        header: 'Mª Ángeles Plaza',
        meta: 'Estudiante',
        imageURL: './../../Images/member.png'
    },
    {
        header: 'David Seijas',
        meta: 'Estudiante',
        imageURL: './../../Images/member.png'
    },
    {
        header: 'Javier Verde',
        meta: 'Estudiante',
        imageURL: './../../Images/member.png'
    }

];

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const MemberCard = ({ i }) => {
    const classes = useStyles();
    return (
/*         <Paper padding = {20} className={classes.paper}>
 */            
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 1 }} margin = {2}>
                        <Typography
                            margin = {2}
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: 500,
                                color: '#276fe6 '
                            }}
                            align='center'
                        >
                            {info[i].header}
                        </Typography>
                        <Typography
                            margin = {2}
                            sx={{
                                fontSize: '1rem',
                                fontWeight: 500,
                                color: '#4f87e4 '
                            }}
                            align='center'
                        >
                            {info[i].meta}
                        </Typography>
                        <p></p>
                        <Box margin = {4}>
                            <Image
                            margin='3rem'
                            padding = '3rem'
                            centered
                            size='tiny'
                            src={info[i].imageURL}
                        />
                        </Box>
                        

                    </Box>
                </CardWrapper>
            
/*         </Paper>
 */    );
};



export default MemberCard;
