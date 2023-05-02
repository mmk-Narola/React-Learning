import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 20,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      if (state.firstCounter > 0) {
        return { ...state, firstCounter: state.firstCounter - action.value };
      }
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      if (state.secondCounter > 0) {
        return { ...state, secondCounter: state.secondCounter - action.value };
      }
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducers3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="profile">
      <h2>Use Reducers Example - 3 with Multiple Object </h2>
      <div>First Count - {count.firstCounter}</div>
      <div>Secount Count - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
        Increment1
      </button>
      <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
        Decreament1
      </button>

      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        Decreament2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducers3;
