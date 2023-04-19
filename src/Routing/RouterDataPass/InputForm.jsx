import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    name: "",
    surname: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  //   const handleSubmit = () => {
  //     console.log(formInput);
  //     navigate("details", {
  //       state: {
  //         name: formInput.name,
  //       },
  //     });
  //   };

  return (
    <>
      <input
        name="name"
        value={formInput.name}
        placeholder="Enter your Name"
        onChange={handleChange}
      />
      <input
        name="surname"
        value={formInput.surname}
        placeholder="Enter your Surname"
        onChange={handleChange}
      />
      {/* <button onClick={handleSubmit}>Submit</button> */}
      <Link to="details" state={formInput}>
        <button>Submit</button>
      </Link>
    </>
  );
};

export default InputForm;
