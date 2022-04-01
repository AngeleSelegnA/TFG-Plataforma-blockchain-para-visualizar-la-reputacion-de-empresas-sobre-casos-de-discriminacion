import React, { createContext, useEffect, useState, useContext} from 'react';
import { context } from './../../contextProvider.js';
import Web3 from 'web3';
import { CardGroup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as constants from '../../constantFile.js';
import complaintContract from '../../complaintContract.json';
import CompanyItem from './CompanyItem.js';
import { makeStyles } from '@material-ui/core/styles'
import  Carousel  from  'semantic-ui-carousel-react';
import { Grid } from '@material-ui/core';
import BarChartLayaout from '../Graphics/BarCharLayaout.js';
import Button from '@material-ui/core/Button';
import CompanyLayout from './CompanyLayout.js';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary.main,
      border: 1,
      borderRadius: 0
    }
  }));



const Home = () => {

    const [companies, setCompanies] = useState([]);
    const [reputation, setReputation] = useState([]);
    const Context = React.useContext(context);

    const theme = useStyles();

    //Variable y setter para mostrar u ocultar la lista de todas las empresas
    const [showList, setShowList] = useState(false);
    //Desplegar lista de empresas
    const showListF = () => { setShowList(!showList); };
   
    useEffect(() => {
        //Obtenemos el array de empresas
        Context.contract.methods.getCompanies().call().then(response => setCompanies(response));
        
        //Obtenemos sus reputaciones
        Context.contract.methods.getReputation().call().then(response => setReputation(response));
    },[]);
    
    //Unimos reputaciones y empresas 
    const cardsAux = companies.map((e, i) => [e, reputation[i]]);

    //ordena los pares empresa, reputacion de mayor a menor reputacion
    const cards = cardsAux.sort((a,b) => (a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0)); 
    let nGroups = Math.floor(companies.length/3);
    let rest = companies.length%3;
    let elements = []

    for(let i = 0; i < nGroups; ++i){
        elements.push( {render:() =>{
            return (
                <div className="ui three column grid">
                <div className="row">
                    <CardGroup itemsPerRow={3}>
                    <div className="column"></div>
                    {cards.slice(3*i,3*(i+1)).map((item) =>
                            <CompanyItem key={item} name={item[0]} reputation={item[1]}/>
                    )}
                    </CardGroup>
                </div>
                </div>
            )}
        });
    }
    elements.push({render:() =>{
        return (
        <div className="ui three column grid">
        <div className="row">
            <CardGroup itemsPerRow={3}>
            <div className="column"></div>
            {cards.slice(3*nGroups, 3*nGroups + rest).map((item)=>
                <CompanyItem key={item[0]} name={item[0]} reputation={item[1]}/>
            )}
            </CardGroup>
        </div>
        </div> )}});
  
  
    
    return(

        <div className={theme.root}>
        <header >
            <img className="ui fluid image" src={'./../../Images/header.jpg'}/>
        </header>

        <h1>TÍTULO/LEMA</h1>

        <Grid container spacing={1} padding ={50}>
            <Carousel
                    elements = {elements}
                    duration ={3000}
                    animation = 'slide left'
                    showNextPrev = {false}
                    showIndicators = {true}   
            />
        </Grid>

        <Grid item container>
                <Grid item xs = {12} sm = {12}/>
                <Grid item xs = {12} sm = {12}/>
        </Grid>
        
        <Button onClick={showListF} className="showList" variant="contained" endIcon={<ArrowDownward style={{ color: "white" }}/>} >Ver todas las empresas</Button>
        <CompanyLayout cards={cards} showList={showList}/>

       
        <h2>Gráficas generales</h2>

        <Grid container spacing={2} padding = {40} className = 'Box' >
            <Grid item xs={6}> 
                <BarChartLayaout titulo="Top 5 mejor valoradas"/> 
            </Grid>
            <Grid item xs={6}> 
                <BarChartLayaout titulo="Denuncias por género"/> 
            </Grid>
        </Grid>
    </div>

    );
    
}

export default Home;