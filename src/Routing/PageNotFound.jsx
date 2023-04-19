import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <h2>
        Pages not founde go to{" "}
        <h1>
          <Link to="/home">Home</Link>
        </h1>
      </h2>
    </>
  );
};

export default PageNotFound;
