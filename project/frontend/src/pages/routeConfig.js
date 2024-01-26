// routeConfig.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Authentification from '../pages/Authentification';

const routeConfig = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={Authentification} />
        {/* Ajoutez d'autres routes selon vos besoins */}
      </Switch>
    </Router>
  );
};

export default routeConfig;
