import { useState } from "react";

export default function Example3() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handleClick(e) {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    setPlayer((prevState) => ({
      ...prevState,
      score: prevState.score + 1,
    }));

    console.log(player);
  }

  return (
    <>
      <div className="profile">
        <h1>Object in State Variable Example-3</h1>
        <label>
          Score: <b>{player.score}</b> <button onClick={handleClick}>+1</button>
        </label>
        <label>
          First name:
          <input
            name="firstName"
            value={player.firstName}
            onChange={handleClick}
          />
        </label>
        <label>
          Last name:
          <input
            name="lastName"
            value={player.lastName}
            onChange={handleClick}
          />
        </label>
      </div>
    </>
  );
}
