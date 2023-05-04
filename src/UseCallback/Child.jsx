import React, { memo } from "react";

const Child = ({ count2, setCount2 }) => {
  console.log("This is Child Component Renedered");
  return <div>Child Component</div>;
};

export default memo(Child);
