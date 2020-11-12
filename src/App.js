import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Homepage/Home";
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* //switching between pages without talking to the server thus the page doesnot reload */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/* This is the default route, at the end */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{
  /* We NEED REACT-ROUTER to do this */
}
{
  /* localhost.com ---> localhost:3000 */
}
{
  /* localhost.com/checkout  */
}
{
  /* localhost.com/login */
}
