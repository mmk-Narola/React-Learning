import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseCallbackParent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState([]);

  const Increment1 = () => {
    setCount1(count1 + 1);
  };

  const fun = useCallback(() => {
    console.log("Hello UseCallBack Hook");
  }, count2);

  return (
    <div className="profile">
      <h2>useCallbackParent</h2>
      <Child count2={count2} />
      <button onClick={Increment1}>Counter - 1 = {count1}</button>
    </div>
  );
};

export default UseCallbackParent;
