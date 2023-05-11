import React, { useEffect, useRef } from "react";
import MutableRef from "./MutableRef";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      UseRef with TypeScript with Dom Refence
      <input type="text" ref={inputRef} />
      <MutableRef />
    </div>
  );
};

export default UseRef;
