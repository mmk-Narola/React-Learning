import { useRef, useState } from "react";
import Todos from "./Todo";
import ArrExample3 from "./ArrExample3";
import ArrExample4 from "./ArrExample4";
import ArrExample5 from "./ArrExample5";
import ArrExample6 from "./ArrExample6";
import Challenges1 from "./Challenges/Challenges1";
import Challenges2 from "./Challenges/Challenges2";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const ArrExample1 = () => {
  const [name, setName] = useState("");
  const [arr, setArra] = useState([]);

  const [removeList, setRemoveList] = useState(initialArtists);

  let nextId = useRef(0);

  return (
    <>
      <div className="profile">
        <h1>Adding to an Array</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            setArra([
              ...arr,
              {
                id: nextId.current++,
                name: name,
              },
            ]);
          }}
        >
          Add
        </button>
        <ul>
          {arr.map((list) => (
            <li key={list.id}>{list.name}</li>
          ))}
        </ul>
      </div>
      <div className="profile">
        <h1>Removing from an Array</h1>
        <ul>
          {removeList.map((list) => (
            <li key={list.id}>
              {list.name}{" "}
              <button
                onClick={() => {
                  setRemoveList(removeList.filter((a) => a.id !== list.id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="profile">
        <Todos />
      </div>
      <div className="profile">
        <ArrExample3 />
      </div>
      <div className="profile">
        <ArrExample4 />
      </div>
      <div className="profile">
        <ArrExample5 />
      </div>
      <div className="profile">
        <ArrExample6 />
      </div>
      <h2>Array State Challenges</h2>
      <div className="profile">
        <Challenges1 />
      </div>
      <div className="profile">
        <Challenges2 />
      </div>
    </>
  );
};

export default ArrExample1;
