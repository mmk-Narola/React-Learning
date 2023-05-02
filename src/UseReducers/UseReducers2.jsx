import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      if (state.firstCounter > 0) {
        return { firstCounter: state.firstCounter - action.value };
      }
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducers2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="profile">
      <h2>Use Reducers Example - 2 with Object </h2>
      <div>Count - {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decreament
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducers2;
