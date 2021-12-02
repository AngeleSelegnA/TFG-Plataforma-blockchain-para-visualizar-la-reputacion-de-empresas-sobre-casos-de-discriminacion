import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Home from './Components/Home/home.js';
import User from './Components/User/user.js';
import Menu from './Components/Menu/menu.js';

function App() {

  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/user" component={ User }></Route>
          <Route path="/" component={ Home }></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
