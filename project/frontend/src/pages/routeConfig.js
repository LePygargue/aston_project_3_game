// routeConfig.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Authentification from "../pages/Authentification";

const routeConfig = () => {
  return (
    <Routes>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={Authentification} />
        <Route path="/game" component={Game} />
        {/* Ajoutez d'autres routes selon vos besoins */}
      </Switch>
    </Routes>
  );
};

export default routeConfig;
