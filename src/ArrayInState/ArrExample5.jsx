import { useState } from "react";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

const ArrExample5 = () => {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const next = [...list];
    next.reverse();
    setList(next);
  }

  return (
    <>
      <h1>Making Other Changes to an array</h1>

      <button onClick={handleClick}>Reverse</button>
      <ul>
        {list.map((artword) => (
          <li key={artword.id}>{artword.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ArrExample5;

/*   <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul> */
