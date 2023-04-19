import { useLocation } from "react-router-dom";

const UserDetails = () => {
  const location = useLocation();
  // console.log(location);
  const { name, surname } = location.state || {};

  return (
    <>
      <h2>UserDetails</h2>
      <h3>Name:{name}</h3>
      <h3>Surname:{surname}</h3>
    </>
  );
};

export default UserDetails;
