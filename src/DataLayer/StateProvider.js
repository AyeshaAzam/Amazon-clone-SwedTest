// setup data layer
// we need this to track the basket

// So dataLayer can be think like this way:
/*
Creating global variables that can be passed arounf in a react app
instead of passing props from grandparent to Parent to chils and so on
*/

import React, { createContext, useContext, useReducer } from "react";

//THIS IS THE DATA LAYER
export const StateContext = createContext(); // here we created empty dataLayer

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* Children is acting as <APP /> component */}
    {children}
  </StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
