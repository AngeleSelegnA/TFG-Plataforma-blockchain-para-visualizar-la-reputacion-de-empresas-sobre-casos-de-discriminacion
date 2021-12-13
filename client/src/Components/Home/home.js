import { useState, useEffect } from 'react';
import Web3 from 'web3';
import * as constants from './../../constantFile.js';

const Home = () => {

    const [companies, setCompanies] = useState([]);
    const [reputation, setReputation] = useState([]);
   
    //Para conectarse al smart contract
    useEffect(() => {
        const infuraUrl = constants.INFURA_URL;

        //Crea una instancia para comunicarse con el nodo indicado
        const web3 = async() => new Web3(infuraUrl);
        //Se conectaria con el contrato
        //const contract = web3.eth.Contract(complaintContract.abi, constants.CONTRACT_ADDRESS);

        /*
        contract.methods.getCompanies().call().then(setCompanies);
        companies.forEach(element=> {
            contract.methods.getCompanies(element).call().then(response => setReputation([...reputation, response]));
        });

        */
    
    }, []);
    
    let result = companies.map((e, i) => [e, reputation[i]]);
    let companyCards = result.map(item => <div><h3>{item[0]} {item[1]}</h3></div>)

    return <div>
        <h1>This is the homescreen</h1>
        <div>
          {companyCards}
        </div>
    
    </div>
}

export default Home;
