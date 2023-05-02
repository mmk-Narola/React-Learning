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

const UseReducers4 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div className="profile">
      <h2>Use Reducers Example - 4 with multiple useReducer</h2>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decreament</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <div>
        <div>Count Two - {countTwo}</div>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decreament</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default UseReducers4;
