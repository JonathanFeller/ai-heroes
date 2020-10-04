import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import logo from './logo.png';
import Home from './components/home';
import About from './components/about';
import Demo from './components/demo';

const App = () => (
  <Router>
    <div className="App">
      <div className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="A.I. Heroes"/>
        </Link>
        <div>
          <Link className="App-link" to="/about">About</Link>
          <Link className="App-link" to="/demo">Demo</Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/demo">
          <Demo />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
