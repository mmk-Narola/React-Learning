import React, { useReducer } from "react";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state > 0) {
        return state - 1;
      }
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const App2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <h2>Count - {count}</h2>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </CountContext.Provider>
  );
};

export default App2;
