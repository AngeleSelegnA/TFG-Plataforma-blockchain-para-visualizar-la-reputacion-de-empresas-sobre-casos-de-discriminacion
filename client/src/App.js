import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Home from './Components/Home/home.js';
import User from './Components/User/user.js';
import Menu from './Components/Menu/menu.js';
import Form from './Components/Form/form.js';

import Company from './Components/Company/company.js';
import Info from './Components/TFGInfo/TFGInfo';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './themes/theme.js'

function App() {

  return (
    <ThemeProvider theme = {theme}>
      <div className="App">
        <Router>
          <Menu />
          <Switch>
            <Route path="/form" component={ Form }></Route>
            <Route path="/info" component={ Info }></Route>
            <Route path="/company" component={ Company }></Route>
            <Route path="/user" component={ User }></Route>
            <Route path="/" component={ Home }></Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
