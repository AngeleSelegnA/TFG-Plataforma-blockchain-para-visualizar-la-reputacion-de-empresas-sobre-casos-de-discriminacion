import { useEffect, useState} from 'react';
import Web3 from 'web3';
import {CardGroup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as constants from './../../constantFile.js';
import complaintContract from './../../complaintContract.json';
import CompanyItem from './CompanyItem.js';
import { makeStyles } from '@material-ui/core/styles'
import  Carousel  from  'semantic-ui-carousel-react';
import header from  '../../Images/header.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary.main
    }
  }));


const Home = () => {

    const [companies, setCompanies] = useState([]);
    const [reputation, setReputation] = useState([]);
    const theme = useStyles();
   
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
    let cards = companies.map((e, i) => [e, reputation[i]]);

    
    let  elements  = [
		{
			render:()=>{
				return (
                    <div class="ui two column grid">
                    <div class="row">
                        <CardGroup itemsPerRow={2}>
                        <div class="column"></div>
                        <CompanyItem key={0} name={companies[0]} reputation={reputation[0]}/>
                        <div class="column"></div>
                        <CompanyItem key={1} name={companies[1]} reputation={reputation[1]}/>
                        </CardGroup>
                    </div>
                    </div>
            

                )
			}
            
		},

        {
            render:()=>{
                return (
                    <div class="ui two column grid">
                    <div class="row">
                        <CardGroup itemsPerRow={2}>
                        <div class="column"></div>
                        <CompanyItem key={2} name={companies[2]} reputation={reputation[2]}/>
                        <div class="column"></div>
                        <CompanyItem key={3} name={companies[3]} reputation={reputation[3]}/>
                        </CardGroup>
                    </div>
                    </div>
            
                )
            }
        },
        {
            render:()=>{
                return(
                    <div class="ui two column grid">
                    <div class="row">
                        <CardGroup itemsPerRow={2}>
                        <div class="column"></div>
                        <CompanyItem key={4} image= {"telefonica.png"} name={companies[4]} reputation={reputation[4]}/>
                        <div class="column"></div>
                        <CompanyItem key={5} name={companies[5]} reputation={reputation[5]}/>
                        </CardGroup>
                    </div>

                    </div>
            
                   
                )
            }
        }
	]
  
    
    return <div className={theme.root}>
        <header >
         <img class="ui fluid image" src={header} />
        </header>
        <h1>TÍTULO/LEMA</h1>
        <Carousel
				elements  =  {  elements  }
				duration  ={3000}
				animation  ='slide left'
				showNextPrev  =  {false}
				showIndicators  ={true}
		/>


        </div>
    

}

export default Home;
