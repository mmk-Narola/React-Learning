import React, { useReducer } from "react";

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

const UseReducers = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="profile">
      <h2>Use Reducers Example - 1</h2>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decreament</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default UseReducers;
