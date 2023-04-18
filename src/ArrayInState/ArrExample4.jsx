import { useState } from "react";

let initialCounters = [0, 0, 0];
const ArrExample4 = () => {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(id) {
    console.log(id);
    const nextCounter = counters.map((c, i) => {
      if (i === id) {
        return c + 1;
      } else {
        return c;
      }
    });

    setCounters(nextCounter);
  }

  return (
    <>
      <h2>Replace Items in Array</h2>

      <ul>
        {counters.map((item, i) => (
          <li key={i}>
            {item} {"  "}
            <button onClick={() => handleIncrementClick(i)}>+1</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ArrExample4;
/* <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => {
            handleIncrementClick(i);
          }}>+1</button>
        </li>
      ))}
    </ul>*/
