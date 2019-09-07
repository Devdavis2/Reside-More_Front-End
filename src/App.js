import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import Sell from './components/Sell'
import Buy from './components/Buy'
import Rent from './components/Rent'
import Contact from './components/Contact'
import Investor from './components/Investor'
import Contractor from './components/Contactor'
import Realtor from './components/Realtor'
import 'materialize-css'; // Must use lines 3 & 4 to import materialize along with npm installs
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"

function App() {
  return (
  
    <div>
      <NavBar/>
    <div className="App">
      <Router>
      <Switch>
      <Route path="/Home" exact component={Home}/>
      <Route path="/About" exact component={About}/>
      <Route path="/Sell" exact component={Sell}/>
      <Route path="/Buy" exact component={Buy}/>
      <Route path="/Rent" exact component={Rent}/>
      <Route path="/Realtor" exact component={Realtor}/>
      < Route path="/Investor" exact component={Investor}/>
      <Route path="/Contractor" exact component={Contractor}/>
      < Route path="/Contact" exact component={Contact}/>
      </Switch>
      </Router>
    </div>
    </div>
   
  );
}

export default App;
