import React, {Component} from "react";
import {Card, Grid} from 'semantic-ui-react';
import Container from './Container';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles'

    
function  getInitialProps () {
    const info = [
        {
            header: 'Alex',
            meta: 'Miembro 1',
            description: 'Empresa de telefonía'
        },
        {
            header: 'Ana',
            meta: 'Miembro  2',
            description: 'Empresa inversora en I+D'
        },
        {
            header: 'Javi',
            meta: 'Miembro 3',
            description: 'Añadir info'
        },
        {
            header: 'Ángeles',
            meta: 'Miembro 4',
            description: 'Empresa de telefonía'
        },
        {
            header: 'Jorge',
            meta: 'Miembro 5',
            description: 'Empresa inversora en I+D'
        },
        {
            header: 'David',
            meta: 'Miembro 6',
            description: 'Empresa especializada en consultoría'
        }
    
    ];
    return {info};
    //es lo mismo que poner return{campaings:campaigns}
}


function renderInfo(){
    const info = [
        {
            header: 'Alex',
            meta: 'Estudiante',
            description: 'Añadir info'
        },
        {
            header: 'Ana',
            meta: 'Estudiante',
            description: 'Añadir info'
        },
        {
            header: 'Javi',
            meta: 'Estudiante',
            description: 'Añadir info'
        },
        {
            header: 'Ángeles',
            meta: 'Estudiante',
            description: 'Añadir info'
        },
        {
            header: 'Jorge',
            meta: 'Estudiante',
            description: 'Añadir info'
        },
        {
            header: 'David',
            meta: 'Estudiante',
            description: 'Añadir info'
        }
    
    ];
    return <Card.Group items = {info} />;
}



const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary.main
    }
  }));

  
function Info (){

        const theme = useStyles();
        return (

            
            <div className={theme.root}>
                <Grid>
                    <Grid.Row >
                        <Grid.Column width = {16}>
                            <Header/>
                        </Grid.Column>
                        
                    </Grid.Row>
                    <Grid.Row>
                        <Container/>
                    </Grid.Row>
                    <Grid.Row >
                        <Grid.Column width = {3} >
                            
                        </Grid.Column>
                        <Grid.Column width = {12} >
                            {renderInfo()}
                        </Grid.Column>
                        <Grid.Column width = {3} >
                             
                        </Grid.Column>
                        
                    </Grid.Row>
                </Grid>
            </div>

        )


    
}

export default Info;