import React from "react";

const Item = ({ list }) => {
  return (
    <>
      {list.map((list, index) => {
        return (
          <li className="item" key={index}>
            {list.name} {list.isPacked ? "✔" : "❌"}
          </li>
        );
      })}
    </>
  );
};

export default Item;

{
  /* <li className="item">
        {name} {isPacked && "✔"}
      </li> */
}
