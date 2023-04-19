import { Route, Routes } from "react-router-dom";
import InputForm from "./InputForm";
import UserDetails from "./UserDetails";

const MainRoute = () => {
  return (
    <>
      <h2>Routing Pass Data Access</h2>

      <div className="profile">
        <InputForm />
      </div>
    </>
  );
};

export default MainRoute;
