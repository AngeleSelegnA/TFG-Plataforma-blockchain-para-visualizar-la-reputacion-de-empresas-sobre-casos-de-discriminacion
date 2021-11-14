import './App.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Home from './Components/Home/home.js';
import Login from './Components/Login/login.js';
import Menu from './Components/Menu/menu.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/login" component={ Login }></Route>
          <Route path="/" component={ Home }></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
