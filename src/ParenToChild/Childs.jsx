import React from "react";

const Childs = (props) => {
  return (
    <>
      <div className="profile">
        <h2>This is Child Component</h2>
        <hr />
        <h4>{props.msg} Come from Parent Component</h4>
      </div>
    </>
  );
};

export default Childs;
