import React, { useEffect, useRef, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  const [calculation, setCalculation] = useState(0);
  const [loop, setLoop] = useState();

  // useEffect(() => {
  //   console.log("This Use Effect call when count state change ");
  // }, [count]);

  // useEffect(() => {
  //   console.log("This Use Effect call when count2 state change");
  // }, [count2]);

  // useEffect(() => {
  //   console.log("This Use Effect call every time when render");
  // });

  useEffect(() => {
    // let timer = setTimeout(() => {
    //   setCount((count) => count + 1);
    // }, 3000);
    // console.log("This Use Effect call every time when render");
    // const timers = setInterval(() => {
    //   setCount((count) => count + 1);
    //   console.log("This Use Effect call every time when render");
    // }, 1000);
    // return () => clearTimeout(timer),
  }, []);

  // useEffect(() => {
  //   setCalculation(() => count * 2);
  //   console.log("UseEffec Call when state changes");
  // }, [count]); // <- add the count variable here

  let ab = useRef(null);
  function handlStart() {
    ab.current = setInterval(() => {
      setCount((count) => count + 1);
      console.log("This Use Effect call every time when render");
    }, 1000);
  }

  return (
    <>
      <div className="profile">
        <h2>UseEffect Hook</h2>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
        <button onClick={() => setCount2(count2 + 10)}>Count {count2}</button>

        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
        <button onClick={handlStart}>Start</button>
        <button onClick={() => clearInterval(ab.current)}>stop</button>
      </div>
    </>
  );
};

export default UseEffect;
