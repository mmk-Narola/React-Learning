import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const Increment1 = () => {
    setCount1(count1 + 1);
  };

  const Increment2 = () => {
    setCount2(count2 + 1);
  };

  const isEven = useMemo(() => {
    console.log("useMemo......");
    let i = 0;
    while (i < 20000000) i++;
    return count1 % 2 == 0;
  });

  // const isEven = () => {
  //   let i = 0;
  //   console.log("useMemo......");
  //   while (i < 20000000) i++;
  //   return count1 % 2 == 0;
  // };

  return (
    <div className="profile">
      <h2>useMemo</h2>

      <button onClick={Increment1}>Counter - 1 = {count1}</button>
      <h2>{isEven ? "Event" : "Odd"}</h2>
      <button onClick={Increment2}>Counter - 2 = {count2}</button>
    </div>
  );
};

export default UseMemo;
