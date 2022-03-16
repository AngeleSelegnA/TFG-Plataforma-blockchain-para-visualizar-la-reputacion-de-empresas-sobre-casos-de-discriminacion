import React, { useEffect, useState } from 'react';
import axios from 'axios'
import * as constants from './constantFile.js'

export const context = React.createContext({});

const Provider = (props) => {
    var [user, setUser] = useState(null);

    useEffect(() => { //le pido al backend que me pase el nombre de usuario, es una API, un puerto abierto abierto de un servidor a una aplicación al que le pido algo concreto
        axios.get(`${constants.SERVER_URL}/getuser`, { withCredentials : true})
        .then((response) => {  setUser(response.data) }) }, []);
    return <context.Provider value={user}>{props.children}</context.Provider>;
}
export default Provider;
