import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FirstPage from './components/firstPage';
import Game from './components/game';

function App() {
  return (
    <div className='App'>
      {/* <FirstPage /> */}
    <Router>
      <FirstPage />
      <Switch>
        {/* <Route exact path='/' component={FirstPage} /> */}
        <Route exact path='/Game' component={Game} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
