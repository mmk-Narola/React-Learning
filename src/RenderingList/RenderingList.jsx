import { people } from "./data.js";
import { getImageUrl } from "../Props/utility.jsx";

export default function RenderingList() {
  console.log(people);
  const List = people.map((list) => {
    return (
      <li key={list.id}>
        <img src={getImageUrl(list)} alt={list.name} />
        <p>
          <b>{list.name}:</b>
          {" " + list.profession + " "}
          known for {list.accomplishment}
        </p>
      </li>
    );
  });
  return (
    <>
      <div>
        <section className="profile">
          <h1>Rendering List</h1>
          <ul>{List}</ul>
        </section>
      </div>
    </>
  );
}
