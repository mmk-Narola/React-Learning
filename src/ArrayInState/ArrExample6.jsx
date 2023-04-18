import { useState } from "react";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: false },
];

const initialList2 = [
  { id: 0, title: "Big ", seen: false },
  { id: 1, title: "Lunar ", seen: true },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList2);
  const [checkList, setCheckList] = useState([]);

  function handleToggleMyList(artworkId, nextSeen, singleList) {
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen };
        } else {
          // No changes
          return artwork;
        }
      })
    );
    if (nextSeen) {
      setCheckList([...checkList, singleList]);
    } else if (!nextSeen) {
      // setCheckList(checkList.filter((id) => id !== artworkId));
      // setCheckList((list) => list.filter((list) => list !== title));
      setCheckList((list) => list.filter((data) => data.id !== artworkId));
    }
  }

  console.log(checkList);

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen };
        } else {
          // No changes
          return artwork;
        }
      })
    );
  }

  return (
    <>
      <h2>Updating objects inside arrays</h2>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked, artwork);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
