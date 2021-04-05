import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bienes from './pages/Bienes';
import Home from './pages/Home';
import Login from './pages/Login';
import Necesidades from './pages/Necesidades';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/necesidades">  
          <Necesidades />
        </Route>
        <Route exact path="/bienes">
          <Bienes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
