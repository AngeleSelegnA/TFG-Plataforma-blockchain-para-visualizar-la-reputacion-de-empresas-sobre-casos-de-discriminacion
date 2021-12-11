import React, { useState } from 'react';
import linkedin_logo from '../../Images/linkedin_logo.png';
import styles from './user.module.css';
import {context} from '../../contextProvider.js';
import axios from 'axios';
import Web3 from 'web3';

const User = () => {
    //Variable y setter para mostrar u ocultar el formulario
    const [showForm, setShowForm] = useState(false);

    //Variable que contiene los datos del formulario
    const [input, setInput] = useState({explanation : ''});

    //Se obtiene el usuario (se comprueba si hay un usuario logeado o no)
    const user = React.useContext(context);
    
    //Delegamos al servidor la autenticacion
    const verifyLinkedIn = () => { window.location.href ="http://localhost:3001/auth/linkedin"};

    //Delegamos al servidor el cierre de sesion
    const logOut = () => { window.location.href ="http://localhost:3001/logout"};
   
    //Desplegar el formulario
    const showFormF = () => { setShowForm(!showForm); };

    //Cuentas de metamask
    const [accounts, setAccounts] = useState([]);


    //Se guardan los datos escritos en el formulario
    const handleInput = (e) => { setInput({...input, [e.target.name] : e.target.value }); };

    //Para comprobar si tienen proveedor (Metamask)
    const hasProvider = !! Web3.givenProvider;

    //Funcion para el submit
    const handleSubmit = (e) => { 
        e.preventDefault();
        //Si todavia no se ha conectado con Metamask entonces aparece un popup para la conexion
        if(accounts.length == 0 && hasProvider) Web3.givenProvider.send('eth_requestAccounts').then(res => setAccounts(res.result));
        //Se envia al servidor
       /* axios.post('/getForm', input);*/
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
