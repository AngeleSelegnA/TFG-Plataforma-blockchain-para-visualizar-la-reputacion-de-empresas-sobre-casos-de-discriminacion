import { createContext, useEffect, useState} from 'react';
import Web3 from 'web3';
import {CardGroup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as constants from '../../constantFile.js';
import complaintContract from '../../complaintContract.json';
import CompanyItem from './CompanyItem.js';
import { makeStyles } from '@material-ui/core/styles'
import  Carousel  from  'semantic-ui-carousel-react';
import header from  '../../Images/header.jpg';
import {Grid} from '@material-ui/core';
import BarChartLayaout from '../Graphics/BarCharLayaout.js';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary.main
    }
  }));


const Home = () => {

    const [companies, setCompanies] = useState([]);
    const [reputation, setReputation] = useState([]);
    const theme = useStyles();
    //const[company, onFilterChanged]=useState([]);
   
    useEffect(() => {
    //Para conectarse al smart contract
        const infuraUrl = constants.INFURA_URL;

        //Crea una instancia para comunicarse con el nodo indicado
        const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

        //Se conectaria con el contrato
        const contract = new web3.eth.Contract(complaintContract.abi, constants.CONTRACT_ADDRESS);

        //Obtenemos el array de empresas
        contract.methods.getCompanies().call().then(response => setCompanies(response));
        
        //Obtenemos sus reputaciones
        contract.methods.getReputation().call().then(response => setReputation(response));
    
    },[]);
    
    //Unimos reputaciones y empresas
    const cards = companies.map((e, i) => [e, reputation[i]]);

    var resto = companies.length%3;
    let n_elems=0;
    if( resto==0){
        n_elems=companies.length/3;
    }
    else{
        n_elems=companies.length/3+1;
    }

    let  elements  = [
		{ 

            render:()=>{
                return (
                    <div className="ui three column grid">
                        <div className="row">
                            <CardGroup itemsPerRow={3}>
                            <div className="column"></div>
                            <CompanyItem key={1} name={companies[0]} reputation={reputation[0]}/>
                            <div className="column"></div>
                            <CompanyItem key={2} name={companies[1]} reputation={reputation[1]}/>
                            <div className="column"></div>
                            <CompanyItem key={3} name={companies[2]} reputation={reputation[2]}/>
                            </CardGroup>
                        </div>
                    </div>
                )
            }   
		},
        {
            render:()=>{
                return (
                    <div className="ui three column grid">
                        <div className="row">
                            <CardGroup itemsPerRow={3}>
                            <div className="column"></div>
                            <CompanyItem key={1} name={companies[4]} reputation={reputation[4]}/>
                            <div className="column"></div>
                            <CompanyItem key={2} name={companies[5]} reputation={reputation[5]}/>
                            <div className="column"></div>
                            <CompanyItem key={3} name={companies[6]} reputation={reputation[6]}/>
                            </CardGroup>
                        </div>
                    </div>
                )
            }
        },
        {
            render:()=>{
                return (
                    <div className="ui three column grid">
                        <div className="row">
                            <CardGroup itemsPerRow={3}>
                                <div className="column"></div>
                                <CompanyItem key={1} name={companies[7]} reputation={reputation[7]}/>
                                <div className="column"></div>
                                <CompanyItem key={2} name={companies[8]} reputation={reputation[8]}/>
                                <div className="column"></div>
                                <CompanyItem key={3} name={companies[9]} reputation={reputation[9]}/>
                            </CardGroup>
                        </div>
                    </div>
                )
            }
        }
    ]
  
    
    return <div className={theme.root}>
        <header >
            <img className="ui fluid image" src={header}/>
        </header>

        <h1>TÍTULO/LEMA</h1>

        <Button className="Ver todo"/>
        <Grid container spacing={1} padding ={50} direction ="column">
            <Carousel
                    elements = {elements}
                    duration ={3000}
                    animation = 'slide left'
                    showNextPrev = {false}
                    showIndicators = {true}   
            />
        </Grid>
       
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
}

export default Home;
