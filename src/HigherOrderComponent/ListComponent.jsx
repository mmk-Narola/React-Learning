import React from "react";
import ListHoc from "./ListHoc";

const ListComponent = ({ listData }) => {
  return (
    <>
      <ul>{listData && listData.map((item) => <li key={item}>{item}</li>)}</ul>
    </>
  );
};

export default ListHoc(ListComponent);
