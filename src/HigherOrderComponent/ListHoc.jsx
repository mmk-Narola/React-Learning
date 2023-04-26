import React from "react";

const ListHoc = (Component) => (props) => {
  console.log(props);
  return (
    <>
      <h2>{props.heading}</h2>
      <Component {...props} />
    </>
  );
};

export default ListHoc;
