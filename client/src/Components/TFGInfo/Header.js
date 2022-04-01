import { Header, Icon, Image } from 'semantic-ui-react';
import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import {  Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, Paper} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        //margin: '2rem',
        backgroundColor:'#fff  ',
    },
  }));

const HeaderExampleUsersIcon = () => {
  const classes = useStyles();

  return (

  <div>
    <div className="ui grid intro">
        <div className="row">
            <div className="column center aligned">
                <Paper padding = {20} className={classes.paper}>
                <Typography
                            component = {'span'}
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: 500,
                                color: '#276fe6'
                            }}
                            align='center'
                        >
                   <h1 >Plataforma Blockchain para visualizar la Reputación de empresas sobre casos de Discriminación</h1>
                   </Typography>
                </Paper>

            </div>
        </div>
    </div>
    <p></p>
    <Image
      margin='2rem'
      centered
      size='small'
      src={'./Images/fdi_logo.png'}
    />
  </div>
)
  }

export default HeaderExampleUsersIcon