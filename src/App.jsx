import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/sucesso'>
          <Success />
        </Route>
        <Route path='/politica-de-privacidade'>
          <Privacy />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
