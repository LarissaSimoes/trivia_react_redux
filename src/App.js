import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Play from './pages/Play';
import { Settings } from './pages/Settings';
import logo from './trivia.png';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="trivia" />
      </header>
      <Switch>
        <Route path="/play" component={ Play } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/settings" component={ Settings } />
        <Route exact path="/" component={ Login } />
        <Route exact path="/ranking" component={ Ranking } />
      </Switch>
    </div>
  );
}
