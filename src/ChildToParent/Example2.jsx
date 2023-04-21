import React, { useState } from "react";

const Example2 = () => {
  return (
    <>
      <div className="profile">
        Example2 <hr />
        <Parent />
      </div>
    </>
  );
};

export default Example2;

function Child({ handleClick }) {
  return (
    <>
      <button onClick={(e) => handleClick(100)}>Click</button>
    </>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleState = (num) => {
    setCount(count + num);
    console.log("argument from Child: ", num);
  };

  return (
    <>
      <Child handleClick={handleState} />
      <h2>Count: {count}</h2>
    </>
  );
}
