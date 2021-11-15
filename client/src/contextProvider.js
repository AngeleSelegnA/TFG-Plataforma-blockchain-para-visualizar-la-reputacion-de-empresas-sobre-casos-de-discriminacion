import React, { useEffect, useState } from 'react';
import axios from 'axios'

export const context = React.createContext({});

const Provider = (props) => {
    var [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/getuser", { withCredentials : true})
        .then((response) => {  setUser(response.data) }) }, []);
    return <context.Provider value={user}>{props.children}</context.Provider>;
}
export default Provider;
