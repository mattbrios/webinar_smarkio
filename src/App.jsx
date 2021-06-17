import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/sucesso'>
          <Success />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
