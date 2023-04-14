import { useState } from "react";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4/Example4";

export default function Example1() {
  const [person, setPerson] = useState({
    firstName: "Mahesh",
    lastName: "Kshirsagar",
    email: "mmk@gmail.com",
  });

  function handleChange(e) {
    console.log(e.target.name);
    setPerson({
      ...person,
      [e.target.name]: [e.target.value],
    });

    console.log(person);
  }

  return (
    <>
      <div className="profile">
        <h1>Object in State Variable Example-1</h1>

        <label>
          First name:
          <input
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last name:
          <input
            name="lastName"
            value={person.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input name="email" value={person.email} onChange={handleChange} />
        </label>

        <p>
          {person.firstName} {person.lastName} ({person.email})
        </p>
      </div>
      <Example2 />
      <Example3 />
      <Example4 />
    </>
  );
}
