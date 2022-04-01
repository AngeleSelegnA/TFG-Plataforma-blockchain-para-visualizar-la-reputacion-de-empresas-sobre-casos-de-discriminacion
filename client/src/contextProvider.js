import React, { useEffect, useState } from 'react';
import axios from 'axios'
import * as constants from './constantFile.js'
import Web3 from 'web3';
import { ethers } from "ethers";

import complaintContract from './complaintContract.json';

export const context = React.createContext({});



const Provider = (props) => {

    var [user, setUser] = useState(null);
    var [balance, setBalance] = useState(null);
    var [companies, setCompanies] = useState([]);

    //Si todavia no se ha conectado con Metamask entonces aparece un popup para la conexion
    const infuraUrl = constants.INFURA_URL;
    //Crea una instancia para comunicarse con el nodo indicado
    const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
    //Nos conectamos con el contrato
    const contract = new web3.eth.Contract(complaintContract.abi, constants.CONTRACT_ADDRESS);
    const provider = ethers.getDefaultProvider("rinkeby");

    useEffect(async () => {
        await Promise.all([
            axios.get(`${constants.SERVER_URL}/getuser`, { withCredentials : true})
                .then((response) => {  setUser(response.data) }),
            provider.getBalance(constants.ADDRESS2)
                .then((response) => { setBalance(ethers.utils.formatEther(response))})])}, []);
    return <context.Provider value={{ "user" : user, "web3" : web3, "contract": contract, "balance": balance}}>{props.children}</context.Provider>;
}
export default Provider;