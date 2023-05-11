import React, { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValueRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValueRef.current) {
      window.clearInterval(interValueRef.current);
      setTimer(0);
    }
  };

  useEffect(() => {
    interValueRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      MutableRef with Typescript with Mutable Reference
      <h2>Hook Ref {timer}</h2>
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;
