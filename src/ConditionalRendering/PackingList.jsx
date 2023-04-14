import React from "react";
import Item from "./Item";

const PackingList = () => {
  const itemList = [
    {
      name: "Bags",
      isPacked: true,
    },
    {
      name: "Clothes",
      isPacked: false,
    },
    {
      name: "Stationary",
      isPacked: true,
    },
    {
      name: "Medicien",
      isPacked: false,
    },
    {
      name: "Shoes",
      isPacked: true,
    },
  ];
  return (
    <div className="conRend">
      <h2>ConditionalRendering</h2>
      <ul>
        <Item list={itemList} />
      </ul>
    </div>
  );
};

export default PackingList;
