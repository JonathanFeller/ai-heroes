import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import logo from './logo.png';
import Home from './components/home';
import Heroes from './components/heroes';
import Example from './components/example';
import Demo from './components/demo';

const App = () => (
  <Router>
    <div className="App">
      <div className="App-header">
        <Link to="/"><img src={logo} className="App-logo" alt="A.I. Heroes" /></Link>
        <div>
          <Link className="App-link" to="/heroes">Heroes</Link>
          <Link className="App-link" to="/demo">Demo</Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/heroes">
          <Heroes />
        </Route>
        <Route path="/demo">
          <Demo />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
