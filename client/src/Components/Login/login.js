import React from 'react';
import linkedin_logo from '../../Images/linkedin_logo.png';
import styles from './login.module.css'
import {context} from '../../contextProvider.js'
const Login = () => { 

    const user = React.useContext(context)

    if(!user){
        const verifyLinkedIn = () => { 
            window.location.href ="http://localhost:3001/auth/linkedin"}
        
        return <div className={styles.loginGeneral}>
            <div className={styles.loginBox}>
                <h1>Login</h1>
                <div className={styles.loginButton} onClick={verifyLinkedIn}>
                    <img src={linkedin_logo} alt="Linkedin Logo"/>
                    <p>Verify your identity with LinkedIn</p>
                </div>
                <div className={styles.reminderText}>
                    <p>Your identity or personal data will not be published or stored anywhere</p>
                </div>
            </div>
        </div>
    }
    else{

        return <div><h1>Welcome</h1></div>
    }
    
}

export default Login
