import {useContext} from 'react';
import styles from './menu.module.css';
import { NavLink } from 'react-router-dom';
import fdi_logo from '../../Images/fdi_logo.png';
import {context} from '../../contextProvider.js';
import * as userFunctions from '../../userFunctions.js';

//Funcion para mostrar el menu, se usa Navlink en vez de Link para poder saber qué pagina esta activa.
const Menu = () => { 

    //Se obtiene el usuario (se comprueba si hay un usuario logeado o no)
    const user = useContext(context);

    return <div className={styles.menuDiv}>
       <ul className={styles.menuUl}>
        <li className={styles.textLi}><NavLink to="/" activeClassName={styles.isActive} exact={true}>Home</NavLink></li>
        <li className={styles.textLi}><NavLink to="/user" activeClassName={styles.isActive}>User</NavLink></li>
{/*     <li className={styles.textLi}><NavLink to="/company" activeClassName={styles.isActive}>Company</NavLink></li>
        <li className={styles.textLi}><NavLink to="/form" activeClassName={styles.isActive} >Form</NavLink></li> */} 
        <li className={styles.textLi}><NavLink to="/info" activeClassName={styles.isActive}>TFG Info</NavLink></li>
        <li className={styles.imgLi}><img className={styles.menuImg} src={fdi_logo} alt="FDI Logo"/></li>
        <li><button onClick={!user ? userFunctions.verifyLinkedIn : userFunctions.logOut}>
               {!user ? "Iniciar sesión" : "Cerrar sesión"}
            </button>
        </li>
      </ul>
    </div>  
}

export default Menu;
