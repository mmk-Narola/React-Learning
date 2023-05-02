import React, { useContext } from "react";
import { CountContext } from "../App2";

const ComponentF = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentF
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decreament
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentF;
