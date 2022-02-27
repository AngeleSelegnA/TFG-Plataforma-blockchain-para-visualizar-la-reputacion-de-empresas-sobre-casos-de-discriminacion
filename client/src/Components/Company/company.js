import React, {Component} from "react";
import { Rating, Card, Image } from "semantic-ui-react";
import telefonica from '../Home/telefonica.png';
import { makeStyles } from '@material-ui/core/styles'
import {Grid, Button, Box, Paper} from '@material-ui/core';
import CompanyTable from './CompanyTable'
import HeaderCompany from "./HeaderCompany";
import '../Graphics/graphics.css';
import SendIcon from '@material-ui/icons/Send';

import GraphicsLayout from "../Graphics/GraphicsLayout";


<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

      </link>



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main
  },


  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
  },
  paperTable: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1200,
    backgroundColor: '#bbdefb',
  },
  paperGraphics: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1200,
    backgroundColor: '#bbdefb'
  },
  button: {
    color: '#bbdefb' , 
    backgroundColor: '#6495ED'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));


function Company (){
        const classes = useStyles();
        return (
            

            <div className={classes.root}>


                <Grid container spacing={2} direction = "column">
                    <Grid item><HeaderCompany/></Grid> 
                    <Grid item container>
                        <Grid item xs = {12} sm = {12}/>
                        <Grid item xs = {12} sm = {12}/>
                    </Grid>
                </Grid>


{/* 

                <Grid container spacing={2} direction = "column">
                    <Grid item>
                      <Image
                        centered
                        size='large'
                        src={telefonica}
                      />
                    </Grid> 
                    <Grid item container>
                        <Grid item xs = {12} sm = {12}/>
                        <Grid item xs = {12} sm = {12}/>
                    </Grid>
                </Grid> */}



                <Grid container spacing={2} direction = "column">
                    <Grid item>
                      <Button className = {classes.button} variant="contained" endIcon={<SendIcon />} >
                       Denunciar
                      </Button>
                    </Grid> 
                    <Grid item container>
                        <Grid item xs = {12} sm = {12}/>
                        <Grid item xs = {12} sm = {12}/>
                    </Grid>
                </Grid>

              

                <Grid container padding = {20} spacing={2} justify = "center">
                    <CompanyTable/>
                </Grid> 
                <Grid item container padding = {20}>
                        <Grid item spacing={2} xs = {12} sm = {12}/>
                        <Grid item spacing={2} xs = {12} sm = {12}/>
                </Grid>
                

              <Grid container spacing={2} direction = "column">
                    <Grid item>

                    </Grid> 
                    <Grid item container padding = {20}>
                        <Grid item xs = {12} sm = {12}/>
                        <Grid item xs = {12} sm = {12}/>
                    </Grid>
              </Grid>




              <Paper padding = {20} className={classes.paperGraphics}>
                
                <Grid container spacing={2} padding = {20} class = 'Box' >
                  <Grid item xs={6}> 
                    <GraphicsLayout/> 
                  </Grid>
           
                  <Grid item xs={6}>
                    <GraphicsLayout/>
                  </Grid>
                </Grid>
              </Paper>


              <Paper className={classes.paperGraphics}>
                <Grid container padding = {20} spacing={2}  direction = "column">
                    <Grid item><GraphicsLayout/></Grid> 
                </Grid> 
              </Paper>
            </div>
            

        )


    
}

export default Company;