/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'
import {  Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'
import { Button, Box, Paper} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(6),
        margin: '2rem',
        width: 2000,
        backgroundColor:'#fff  ',
    },
  }));


const ContainerExampleText = () => {
    const classes = useStyles();
    return (
        <Container >
            <Grid>
                <Paper  className = {classes.paper} >
                    <Grid.Row>
                        <Header as='h2' color= 'blue'>Descripción del Proyecto</Header>
                    </Grid.Row>
                    <Grid.Row >
                        
                        <Typography
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: 500,
                                color: '#3949ab'
                            }}
                            align='left'
                            margin = {6}
                        >
                            <p></p>
                            
                            <p color= '#3949ab'>
                                Hoy en día, por desgracia aún está muy presente la discriminación en las empresas por sexismo, racismo, homofobia, transfobia, u otras muchas discriminaciones. Esta situación lleva a casos de mobbing o acoso contra empleados/as. 
                            
                            </p>
                            <p color= '#3949ab'>
                                ¿Cómo saber antes de entrar si una empresa tiene un historial problemático de discriminación? Este TFG va a explorar el potencial de la tecnología blockchain para crear una plataforma transparente y no censurable, que permita a las personas conocer la reputación de empresas antes de aceptar trabajar para ellas. A través de esta plataforma, se podrán:
                            </p>
                            <p color= '#3949ab'>
                                (1) buscar denuncias a entidades por discriminaciones sociales (por edad, género, etnia, nacionalidad, orientación sexual, etc)
                            </p>
                            <p color= '#3949ab'> 
                                (2) realizar denuncias anónimas compartiendo relatos sobre situaciones vividas
                            </p>
                            <p color= '#3949ab'> 
                                (3) aportar información de la propia empresa sobre sus esfuerzos para paliar la discriminación
                            </p>
                            <p color= '#3949ab'>
                                (4) proporcionar la reputación acumulada de las empresas con la información disponible
                            </p>
                        </Typography>

                    </Grid.Row>
                </Paper>  
            </Grid>                    

        </Container>
    )
}

export default ContainerExampleText