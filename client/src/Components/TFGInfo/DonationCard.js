import PropTypes from 'prop-types';
import { useState } from 'react';
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
    backgroundColor: '#fff8ae ',
    margin: '1rem',
    overflow: 'hidden',
    position: 'relative',
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

const DonationCard = ({ isLoading }) => {
    const classes = useStyles();
    return (
/*         <Paper padding = {20} className={classes.paper}>
 */            
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2.25 }}>
                        <Grid container direction="column">
                            <Grid item sx={{ mb: 0.75 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs={8}>
                                        <Grid container alignItems="center">
                                            <Grid item xs={10}>
                                                <p></p>
                                                <Typography
                                                    margin = {5}
                                                    sx={{
                                                        fontSize: '2rem',
                                                        fontWeight: 500,
                                                        color: '#276fe6 '
                                                    }}
                                                    align='left'
                                                >
                                                    Total Recaudado
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={10}>
                                                
                                                <Typography 
                                                    margin = {5} 
                                                    sx={{ fontSize: '3rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75, color: '#4f87e4 ' }}
                                                    align='left'>
                                                    10 ether
                                                </Typography>
                                                <p></p>
                                            </Grid>
                                           
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={4}>
                                        {/* <button className = {classes.button}  size = "large" variant="contained" endIcon={<SendIcon />} >
                                            Dona Aquí 
                                        </button> */}
{/*                                         <button class="ui yellow basic button huge"  >Dona Aquí</button>
 */}                                        <button class="ui blue button huge ">DONA AQUÍ</button>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            
/*         </Paper>
 */    );
};



export default DonationCard;
