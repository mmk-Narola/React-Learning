import React from "react";

const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rowsCategory = [];
  let lastCategory = null;

  products.forEach((product) => {
    // search text
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    // chechbox
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rowsCategory.push(
        <>
          <tr>
            <th colSpan="2">{product.category}</th>
          </tr>
        </>
      );
    }
    if (product !== null) {
      const name = product.stocked ? (
        product.name
      ) : (
        <span style={{ color: "red" }}>{product.name}</span>
      );
      rowsCategory.push(
        <>
          <tr>
            <td>{name}</td>
            <td>{product.price}</td>
          </tr>
        </>
      );
    }
    lastCategory = product.category;
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{...rowsCategory}</tbody>
      </table>
    </>
  );
};

export default ProductTable;
