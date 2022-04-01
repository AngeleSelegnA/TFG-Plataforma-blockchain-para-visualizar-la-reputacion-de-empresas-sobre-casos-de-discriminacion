import {useContext} from 'react';
import styles from './menu.module.css';
import { NavLink } from 'react-router-dom';
import {context} from '../../contextProvider.js';
import * as userFunctions from '../../userFunctions.js';

//Funcion para mostrar el menu, se usa Navlink en vez de Link para poder saber qué pagina esta activa.
const Menu = () => { 

    //Se obtiene el usuario (se comprueba si hay un usuario logeado o no)
    const Context = useContext(context);

    return <div className={styles.menuDiv}>
       <ul className={styles.menuUl}>
        <li className={styles.textLi}><NavLink to="/" activeClassName={styles.isActive} exact={true}>Home</NavLink></li>
        <li className={styles.textLi}><NavLink to="/info" activeClassName={styles.isActive}>TFG Info</NavLink></li>
        <li className={styles.imgLi}><img className={styles.menuImg} src={'./../../Images/fdi_logo.png'} alt="FDI Logo"/></li>
        <li><button onClick={!Context.user ? userFunctions.verifyLinkedIn : userFunctions.logOut}>
               {!Context.user ? "Iniciar sesión" : "Cerrar sesión"}
            </button>
        </li>
      </ul>
    </div>  
}

export default Menu;
