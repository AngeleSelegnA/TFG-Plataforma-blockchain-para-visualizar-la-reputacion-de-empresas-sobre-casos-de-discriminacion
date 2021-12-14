import React, { useEffect, useState } from 'react';
import linkedin_logo from '../../Images/linkedin_logo.png';
import styles from './user.module.css';
import {context} from '../../contextProvider.js';
import Web3 from 'web3';
import * as constants from './../../constantFile.js';
import complaintContract from './../../complaintContract.json';

const User = () => {
    //Variable y setter para mostrar u ocultar el formulario
    const [showForm, setShowForm] = useState(false);

    //datos del formulario
    const [input, setInput] = useState('');
    const [company, setCompany] = useState('');

    //Se obtiene el usuario (se comprueba si hay un usuario logeado o no)
    const user = React.useContext(context);
    
    //Delegamos al servidor la autenticacion
    const verifyLinkedIn = () => { window.location.href = `${constants.SERVER_URL}/auth/linkedin`};

    //Delegamos al servidor el cierre de sesion
    const logOut = () => { window.location.href = `${constants.SERVER_URL}/logout`};
   
    //Desplegar el formulario
    const showFormF = () => { setShowForm(!showForm); };

    const handleCompany = (e) => { setCompany(e.target.value); }

    //Se guardan los datos escritos en el formulario
    const handleInput = (e) => { 
         setInput(e.target.value); 
        //setInput(oldInput => ({...oldInput, [e.target.name] : e.target.value })); 
    };

    //Para comprobar si tienen proveedor (Metamask)
    const hasProvider = !! Web3.givenProvider;

    //Variable que va a contener las empresas que apareceran como opcion en el formulario
    const [companies, setCompanies] = useState([]);

    //Obtenemos las empresas del smart contract, conectandonos al nodo de Infura
    useEffect(() => {

        const infuraUrl = constants.INFURA_URL;
        //Crea una instancia para comunicarse con el nodo indicado
        const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
        //Se conectaria con el contrato
        const contract = new web3.eth.Contract(complaintContract.abi, constants.CONTRACT_ADDRESS);
        //Obtenemos el array de empresas
        contract.methods.getCompanies().call().then(response => setCompanies(response));
    },[]);

    //Funcion para el submit
    const handleSubmit = async(e) => { 
        e.preventDefault();
        //Si todavia no se ha conectado con Metamask entonces aparece un popup para la conexion
        const web3 = new Web3(window.web3.currentProvider);
        const accounts = await window.ethereum.enable();
        const contract = new web3.eth.Contract(complaintContract.abi, constants.CONTRACT_ADDRESS);
        await contract.methods.newComplaint(company, user, input).send({from:accounts[0]});
        setInput("");
    };
   
    if(!user){
        return <div className={styles.container}>
            <div className={styles.loginGeneral}>
                <div className={styles.loginBox}>
                    <h1>Login</h1>
                    <div className={styles.loginButton} onClick={verifyLinkedIn}>
                        <img src={linkedin_logo} alt="Linkedin Logo"/>
                        <p>Verify your identity with LinkedIn</p>
                    </div>
                    <div className={styles.reminderText}>
                        <p>Please note that that logging in is necessary for <strong>identification</strong> purposes:</p>
                        <ul className={styles.infoList}>
                          <li>Your personal information will <strong>not</strong> be published or stored.</li>
                          <li>Sensitive data will <strong>not</strong> be accessed.</li>
                          <li>Your report will be <strong>anonymous</strong>.</li>
                          <li>A randomized name will be assigned to you in order to show the report.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }
    else{
        return <div className={styles.userPanel}>
            <h1>User Panel</h1>
            {showForm && hasProvider && (
                <form onSubmit={handleSubmit} className={styles.reportForm}>
                  <label>Report Form</label>
                  <label>In which company did the incident take place?</label>
                  <select onChange={handleCompany}>
                     {companies.map(item => <option value={item} key={item}>{item}</option>)}
                  </select>
                  <label>Please, explain briefly what happened.</label>
                  <input type="textarea" name="explanation" value={input.explanation} onChange={handleInput} />
                  <button>Submit</button>
                </form>
            )}

            {showForm && !hasProvider && (<div><h3>You need metamask in order make a report.</h3></div>)}
            
            <div className={styles.buttonPanel}>
                <button onClick={showFormF} className={styles.panelButton}>Show/Hide Report</button>
                <button onClick={logOut} className={styles.panelButton}>Log Out</button>
            </div>
        </div>
    }
    
}

export default User
