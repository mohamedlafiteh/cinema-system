import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import ErrorPage from "./ErrorPage";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={ErrorPage} />

        <Route component={Home} />
      </Switch>
    </>
  );
}

export default App;
