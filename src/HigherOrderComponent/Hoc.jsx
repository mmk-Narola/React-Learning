import React from "react";
import ListComponent from "./ListComponent";

const Hoc = (props) => {
  return (
    <div className="profile">
      <h2>Higher Order Component</h2>
      <div className="box">
        <ListComponent listData={[1, 2, 3, 4, 5]} heading={"Number Array"} />
        <ListComponent
          listData={["Item1", "Item2", "Item3", "Item4", "Item5"]}
          heading={"String Array"}
        />
      </div>
    </div>
  );
};

Hoc.propTypes = {};

export default Hoc;
