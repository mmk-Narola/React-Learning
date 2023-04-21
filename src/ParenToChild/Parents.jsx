import React from "react";
import Childs from "./Childs";

const Parents = () => {
  return (
    <>
      <div className="profile">
        <h3>This is Parent Component</h3>
      </div>
      <Childs msg={"Mahesh Kshirsagar"} />
    </>
  );
};

export default Parents;
