import React, { useState } from "react";

const Forms = () => {
  const [forms, setForms] = useState({
    firstName: "",
    lastName: "",
  });

  const [initial, setInitial] = useState({
    firstName: "",
    lastName: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (forms) {
      setInitial({
        ...initial,
        ...forms,
      });
    }
    setForms({
      firstName: " ",
      lastName: " ",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForms({
      ...forms,
      [name]: value,
    });
  }

  return (
    <div className="profile">
      <h2>Form in React</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={forms.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={forms.lastName}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <h1>FirstName:{initial.firstName}</h1>
      <h1>LastName:{initial.lastName}</h1>
    </div>
  );
};

export default Forms;
