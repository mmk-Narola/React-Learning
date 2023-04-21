import React, { useState } from "react";
import Child from "./Child";
import Example2 from "./Example2";
import Example3 from "./Example3";

const Parent = () => {
  const [name, setName] = useState();

  function recievName(data) {
    setName(data);
  }

  return (
    <>
      <div className="profile">
        This is Parent Component <hr />
        <h3>This {name ? name : "Loading..."} Coming from Child Component </h3>
      </div>
      <Child sendName={recievName} />

      <Example2 />
      <Example3 />
    </>
  );
};

export default Parent;
