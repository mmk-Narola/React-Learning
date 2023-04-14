import React, { useState } from "react";

const StateUse = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(true);

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

  return (
    <>
      <div className="profile">
        <button onClick={handleClick}>Click Button {count}</button>
        <button onClick={handleMinus}>Minus</button>

        <button onClick={handleHide}>{show ? "Hide" : "Show"} details</button>
        {show && <h2>Hide This Conent</h2>}

        {num}
      </div>
    </>
  );
};

export default StateUse;
