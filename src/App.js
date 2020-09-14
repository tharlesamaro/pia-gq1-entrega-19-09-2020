import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ListaEscolas from './componentes/ListaEscolas.js';
import Menu from './componentes/Menu.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path='/' component={ListaEscolas}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;