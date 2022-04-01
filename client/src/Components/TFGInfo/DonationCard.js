import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import MainCard from './MainCard';
// material-ui
import { styled } from '@mui/material/styles';
import {  Box, Grid, Typography, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send';
import {  Paper} from '@material-ui/core';
import { ethers } from "ethers";
import swal from 'sweetalert';
import Button from 'semantic-ui-react';
import { context } from './../../contextProvider.js';
import * as constants from './../../constantFile.js';



const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: '#FFF6DB ',
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
    const Context = React.useContext(context);
    const [amount, setAmount] = useState(""); //cantidad a donar en ethers
    
    const handleDonation = async (e) => {
        try{
            if(!window.ethereum) //Para ver si el usuario tiene cartera
                throw new Error("No se encontro cartera de metamask.");
            await window.ethereum.send("eth_requestAccounts");
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            console.log("enviando transaccion")
            const tx = await signer.sendTransaction({
                to: constants.ADDRESS2,
                value:  ethers.utils.parseEther(amount),
                gasPrice: signer.getGasPrice(),
                gasLimit : 100000
            });
            console.log({tx});
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
    <CardWrapper border={false} content={false}>
        <Box sx={{ p: 5 }}>
            <Grid container rowSpacing = {2} direction = "column">
                <Grid item>
                    <TextField id="outlined-basic" label="Cantidad en ethers para donar" variant="outlined" value = {amount} onChange = {(e) => {setAmount(e.target.value)}}/>
                </Grid>
                <Grid item>
                    <button className ="ui blue button huge " onClick = {handleDonation}>DONAR</button>   
                </Grid>
            </Grid>
        </Box>
    </CardWrapper>);
};


/*
                                <Grid container spacing = {2} >
                <Grid item sx={{ mb: 0.75 }}>
                    <Grid container alignItems="center">
                        <Grid item xs={4}>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <TextField id="outlined-basic" label="Cantidad en ethers para donar" variant="outlined" value = {amount} onChange = {(e) => {setAmount(e.target.value)}}/>
                                </Grid>
                                <Grid item>
                                    <button className ="ui blue button huge " onClick = {handleDonation}>DONAR</button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>




<Grid item xs={8}>
                            <Grid container alignItems="center">
                                <Grid item>
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
                                <Grid item>
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
                    */


export default DonationCard;
