import React, { useEffect, useState } from "react";

const StateUse = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(true);
  const [counter, setCounter] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setNum(count);
  }

  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function handleHide() {
    setShow(!show);
  }

  const handleIncreament = () => {
    for (let index = 0; index < 5; index++) {
      setCounter((prev) => prev + 1);
    }
  };

  const logmousemove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("Call useEffect");
    window.addEventListener("mouseover", logmousemove);
  }, []);
  return (
    <>
      <div className="profile">
        <button onClick={handleClick}>Click Button {count}</button>
        <button onClick={handleMinus}>Minus</button>

        <button onClick={handleHide}>{show ? "Hide" : "Show"} details</button>
        {show && <h2>Hide This Conent</h2>}

        {num}
      </div>
      <div className="profile">
        <h2>Example-2 useState with previous state</h2>
        Value : {counter}
        <button onClick={handleIncreament}>Increment + 5</button>
      </div>

      <div className="profile">
        <h2>Retrieve the position (X,Y) of browser</h2>X - {x} Y -{y}
      </div>
    </>
  );
};

export default StateUse;
