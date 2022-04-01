import { Header, Icon, Image } from 'semantic-ui-react'
import image from '../../Images/fdi_logo.png'
import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import {  Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, Paper} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        //margin: '2rem',
        backgroundColor:'#bbdefb ',
    },
  }));

const HeaderExampleUsersIcon = () => {
  const classes = useStyles();

  return (

  <div>
    <div class="ui grid intro">
        <div class="row">
            <div class="column center aligned">
                <div padding = {20} className={classes.paper}>
                  <p></p>
                  <Typography
                              sx={{
                                  fontSize: '2rem',
                                  fontWeight: 500,
                                  color: '#276fe6'
                              }}
                              align='center'
                          >
                      <h1 >Plataforma Blockchain para visualizar la Reputación de empresas sobre casos de Discriminación</h1>
                      <p></p>
                   </Typography>
                </div>

            </div>
        </div>
    </div>
    <p></p>
    <Image
      margin='2rem'
      centered
      size='small'
      src={image}
    />
  </div>
)
  }

export default HeaderExampleUsersIcon