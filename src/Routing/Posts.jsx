import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Posts = () => {
  const [auth, setAuth] = useState(false);
  // useNavigate
  // const nagivate = useNavigate();
  // useEffect(() => {
  //   if (!auth) {
  //     nagivate("/");
  //   }
  // }, [auth]);

  // if (!auth) {
  //   return <Navigate to="/" />;
  // }
  return (
    <>
      <h2>This is Post Component</h2>
      <Link to="/posts/1">Post-1</Link>
      <br />
      <Link to="/posts/2">Post-2</Link>
      <br />
      <Link to="/posts/newposts">New-Posts</Link>
    </>
  );
};

export default Posts;
