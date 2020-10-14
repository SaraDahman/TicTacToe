import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FirstPage from './components/firstPage';
import Game from './components/game';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={FirstPage} />
        <Route exact path='/Game' component={Game} />
      </Switch>
    </Router>
  );
}

export default App;
