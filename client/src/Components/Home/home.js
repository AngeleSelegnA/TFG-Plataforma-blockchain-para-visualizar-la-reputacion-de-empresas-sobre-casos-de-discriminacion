import { useEffect, useState} from 'react';
import Web3 from 'web3';
import * as constants from './../../constantFile.js';
import complaintContract from './../../complaintContract.json';

const Home = () => {

    const [companies, setCompanies] = useState([]);
    const [reputation, setReputation] = useState([]);
   
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
    let card = companies.map((e, i) => [e, reputation[i]]);
    //Creamos componentes (para las cartas)
    let companyCards = card.map(item => <div><h3>{item[0]} {item[1]}</h3></div>);

    return <div>
        <h1>This is the homescreen</h1>
        <div>
          {companyCards}
        </div>
    
    </div>
}

export default Home;
