import React, { useState } from "react";

const Example3 = () => {
  return (
    <>
      <div className="profile">
        Example3 <hr />
        <Parent />
      </div>
    </>
  );
};

export default Example3;

function Child({ handleClick }) {
  const [forms, setForms] = useState({
    name: "",
    age: "",
    city: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForms({
      ...forms,
      [name]: value,
    });
  }

  function handleClicks() {
    handleClick(forms);
    setForms({
      name: "",
      age: "",
      city: "",
    });
  }

  return (
    <>
      <input
        type="text"
        name="name"
        value={forms.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={forms.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        value={forms.city}
        onChange={handleChange}
      />
      <button onClick={handleClicks}>Click</button>
    </>
  );
}

function Parent() {
  const [count, setCount] = useState({
    name: "",
    age: "",
    city: "",
  });

  const handleState = (obj) => {
    setCount({
      ...count,
      ...obj,
    });
  };

  return (
    <>
      <Child handleClick={handleState} />

      <h2>Employee name: {count.name}</h2>
      <h2>Employee age: {count.age}</h2>
      <h2>Employee city: {count.city}</h2>
    </>
  );
}
