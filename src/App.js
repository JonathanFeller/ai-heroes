import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from './logo.png';
import './App.css';


const App = () => (
  <Router>
    <div className="App">
      <div className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" />
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

const Home = () => {
  return (
    <h2>Home</h2>
  );
}

const About = () => {
  return (
    <h2>About</h2>
  );
}

const Demo = () => {
  return (
    <h2>Demo</h2>
  );
}


export default App;
