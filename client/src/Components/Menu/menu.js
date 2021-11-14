import React from 'react';
import styles from './menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => { 
    return <div>
       <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">User</Link></li>
      </ul>
    </div>  
}

export default Menu;
