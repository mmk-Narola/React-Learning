import { useEffect, useState } from "react";
import "./formStyle.css";
import FormValidation2 from "./FormValidation2";

const FormValidation = () => {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(formValid(formValue));
    setIsSubmit(true);
    console.log(formError);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log("Form Succefully Validatate", formValue);
      setFormValue(initialValue);
    }
  });

  const formValid = (values) => {
    console.log(values);
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    if (!values.username) {
      errors.username = "UserName is Required";
    } else if (values.username.length < 3) {
      errors.username = "Username must be more than 3 characters";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (!passRegex.test(values.password)) {
      errors.password =
        "Password must be 5 characters with Upper and Lower Symbol";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is Required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords and Confirm Password  do not match";
    }
    return errors;
  };

  return (
    <div className="profile">
      {Object.keys(formError).length === 0 && isSubmit ? (
        <div className="ui-message-success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
      )}

      <div className="profile-1">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h2>React Form Validation</h2>

            <div className="ui divider">
              <hr />
            </div>

            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <input
                  className="input"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formValue.username}
                  onChange={handleChange}
                />
              </div>
              <p>{formError.username}</p>

              <div className="field">
                <label>Email</label>
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValue.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formError.email}</p>

              <div className="field">
                <label>Password</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValue.password}
                  onChange={handleChange}
                />
              </div>
              <p>{formError.password}</p>

              <div className="field">
                <label>Confirm Password</label>
                <input
                  className="input"
                  type="password"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  value={formValue.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <p>{formError.confirmPassword}</p>

              <button className="fluid-ui-button-blue">Submit</button>
            </div>
          </form>
        </div>
        <br />
        <FormValidation2 />
      </div>
    </div>
  );
};

export default FormValidation;
