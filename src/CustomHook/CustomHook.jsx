import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const CustomHook = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <div>
      CustomHook
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
};

export default CustomHook;
