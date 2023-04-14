import { useState } from "react";

export default function Example2() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPerson({
      ...person,
      name: name === "name" ? value : person.name,
      artwork: {
        ...person.artwork,
        [name]: value,
      },
    });
  }

  return (
    <>
      <div className="profile">
        <h1>Object in State Variable Example-2</h1>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={person.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Title:
          <input
            name="title"
            value={person.artwork.title}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            name="city"
            value={person.artwork.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            name="image"
            value={person.artwork.image}
            onChange={handleChange}
          />
        </label>
        <p>
          <i>
            <b>Title</b>
            {person.artwork.title}
          </i>
          {" by "}
          <b>Name</b>
          {person.name}
          <br />
          (located in <b>City</b> {person.artwork.city})
        </p>
        <img src={person.artwork.image} alt={person.artwork.title} />
      </div>
    </>
  );
}
