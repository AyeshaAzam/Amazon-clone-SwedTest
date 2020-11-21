import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Homepage/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./DataLayer/StateProvider";
import Payment from "./Payment/Payment";
import LocationModal from "./LocationModalNav/LocationModal";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //useEffect <<<<<<<< POWERFUL
  //Piece of code which runs based on a given condition
  useEffect(() => {
    // is a listener when user login or logouts
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in.... then we push the user in datalayer
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user logged out....then we set him to null
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    //we it reders again or refreshes then we need to do clean up operations
    // so if this App() component re-renders for any reasons then
    //it will de-attached it and then re-attached it again with new listener

    return () => {
      unsubcribe();
    };
  }, []);

  console.log("THE USER IS >>>>>> ", user);

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
            <Login />
          </Route>
          <Route path="/payment">
            <Payment />
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
