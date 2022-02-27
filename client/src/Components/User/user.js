import React, { useEffect, useState } from 'react';
import linkedin_logo from '../../Images/linkedin_logo.png';
import styles from './user.module.css';
import {context} from '../../contextProvider.js';
import Web3 from 'web3';
import * as constants from './../../constantFile.js';
import complaintContract from './../../complaintContract.json';
import { makeStyles } from '@material-ui/core/styles'

const User = () => {
    //Variable y setter para mostrar u ocultar el formulario
    const [showForm, setShowForm] = useState(false);

    //Variable que va a contener las empresas que apareceran como opcion en el formulario
    const [companies, setCompanies] = useState([]);

    //Datos del formulario
    const [input, setInput] = useState('');
    const [company, setCompany] = useState('');

    //Cantidad a donar (en caso de que donen)
    const [donationQuantity, setDonationQuantity] = useState(0);

    //Se obtiene el usuario (se comprueba si hay un usuario logeado o no)
    const user = React.useContext(context);
    
    //Delegamos al servidor la autenticacion
    const verifyLinkedIn = () => { window.location.href = `${constants.SERVER_URL}/auth/linkedin`};

    //Delegamos al servidor el cierre de sesion
    const logOut = () => { window.location.href = `${constants.SERVER_URL}/logout`};
   
    //Desplegar el formulario
    const showFormF = () => { setShowForm(!showForm); };

    //Se guarda la empresa escogida
    const handleCompany = (e) => { setCompany(e.target.value); }

    //Se guardan los datos escritos en el formulario de denuncia
    const handleInput = (e) => { 
         setInput(e.target.value); 
    };

    //Se guarda el valor escrito en el formulario de donación
    const handleDonation = (e) => {
        setDonationQuantity(e.target.value);
    }

    //Función para realizar la transaccion al recibir los parametros
    async function newComplaint(web3, address, transaction) {
            try {
                const tx = {
                    to      : transaction._parent._address, //Dirección del contrato
                    data    : transaction.encodeABI(),      //
                    gas     : await transaction.estimateGas({from: address}),   //Se estima el coste en gas
                    gasPrice: await web3.eth.getGasPrice(),   //Precio del gas
                    gaslimit: 0x1000000,   //Limite de gas que se puede gastar
                    value   : 0,   //No se va a realizar una transferencia
                };
                //Se firma la transacción con la clave privada
                const signedTx  = await web3.eth.accounts.signTransaction(tx, constants.PRIVATE_KEY);
                //Se envia la transaccion firmada 
                web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            }
            catch (err) {
                console.log(err.message);
            }
    }

    //Para comprobar si tienen proveedor (Metamask) de forma que puedan donar
    const hasProvider = !! Web3.givenProvider;

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

    //Función que trata el submit en el formulario de denuncias
    const handleSubmit = async(e) => { 
        e.preventDefault();
        //Si todavia no se ha conectado con Metamask entonces aparece un popup para la conexion
        const infuraUrl = constants.INFURA_URL;
        //Crea una instancia para comunicarse con el nodo indicado
        const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
        //Nos conectamos con el contrato
        const contract = new web3.eth.Contract(complaintContract.abi, constants.CONTRACT_ADDRESS);
        //Realizamos la denuncia
        newComplaint(web3, constants.ADDRESS, contract.methods.newComplaint(company,user,input));
        setInput('');
    };

    //Función que trata el submit en el caso de donaciones
    const handleSubmitDonation = async(e) => {
        e.preventDefault();
        //Si todavia no se ha conectado con Metamask entonces aparece un popup para la conexion
        const web3 = new Web3(window.web3.currentProvider);
        const accounts = await window.ethereum.enable();
        
        //No hace falta que firmemos la transacción ya que Metamask lo hace por nosotros
        web3.eth.sendTransaction(
            {
                to: constants.ADDRESS,
                from: accounts[0],
                value: web3.utils.toWei(donationQuantity, 'ether'), //Se transfiere la cantidad introducida en el formulario
            },(err) => {
                if (err) console.log(err.message);
            })
    
        setDonationQuantity(0);
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: theme.palette.primary.main
        }
    }));

    const theme = useStyles();
      
    if(!user){
        return <div className={styles.container} >
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
            {showForm && (
                <form onSubmit={handleSubmit} className={styles.reportForm}>
                  <label>Report Form</label>
                  <label>In which company did the incident take place?</label>
                  <select onChange={handleCompany}>
                     {companies.map(item => <option value={item} key={item}>{item}</option>)}
                  </select>
                  <label>Please, explain briefly what happened.</label>
                  <input type="textarea" name="explanation" value={input} onChange={handleInput} />
                  <button>Submit</button>
                </form>
            )}
            
            <div className={styles.buttonPanel}>
                <button onClick={showFormF} className={styles.panelButton}>Show/Hide Report</button>
                <button onClick={logOut} className={styles.panelButton}>Log Out</button>
            </div>

            {hasProvider && (<div>
              <h3>Please, feel free to suport this platform by donating.</h3>
              <form onSubmit={handleSubmitDonation} className={styles.reportForm}>
                <input type="textarea" name="donationInput" value={donationQuantity} onChange={handleDonation} />
                <button>Donate</button> 
             </form>
            </div>)}

        </div>
    }
    
}

export default User
