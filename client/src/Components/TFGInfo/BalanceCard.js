import React, { useEffect, useState } from "react";
import { context } from './../../contextProvider.js';
import { ethers } from "ethers";
import MainCard from './MainCard';
import { Box, Grid, Typography } from '@mui/material';
import * as constants from './../../constantFile.js';
import { styled } from '@mui/material/styles';

const provider = ethers.getDefaultProvider("rinkeby");
//const balanceInit = provider.getBalance(constants.ADDRESS2);

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: '#fff  ',
    margin: '1rem',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
}));

const BalanceCard = () => {

    const Context = React.useContext(context);
    const [balance, setBalance] = useState(Context.balance);

    useEffect(() => {
        provider.getBalance(constants.ADDRESS2).then((balanceT) => {
            setBalance(ethers.utils.formatEther(balanceT))
        })

    });
    return (
        <CardWrapper border = {false} content = {false}>
            <Box sx={{ p: 5 }}>
                <Typography
                    margin = {2}
                    sx={{
                        fontSize: '2rem',
                        fontWeight: 500,
                        color: '#276fe6 '
                    }}
                    align='center'>
                        Saldo disponible 
                </Typography>
                <Typography
                    margin = {2}
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        color: '#4f87e4 '
                    }}
                    align='center'>
                        {!balance ? "Loading..." : balance.slice(0,6) + ' ETH'}
                </Typography>
            </Box>
        </CardWrapper>
    );
}
export default BalanceCard;
