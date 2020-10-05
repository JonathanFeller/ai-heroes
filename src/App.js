import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import useSound from 'use-sound';
import music from './assets/music.mp3';

import './App.css';

import logo from './logo.png';
import Home from './components/home';
import Heroes from './components/heroes';
import Demo from './components/demo';

const App = () => {
  const [play, { stop, isPlaying }] = useSound(music, { volume: 0.1 });

  useEffect(() => {
    play();
  }, [play]);

  return (
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
            <Home play={play} isPlaying={isPlaying} />
          </Route>
          <Route path="/heroes">
            <Heroes play={play} isPlaying={isPlaying} />
          </Route>
          <Route path="/demo">
            <Demo stop={stop} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
