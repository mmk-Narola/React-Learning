import React from "react";
import "../../index.css";
import { useSearchParams } from "react-router-dom";

const product = [
  {
    id: 1,
    name: "Product-1",
    price: "150",
    rating: 3,
  },
  {
    id: 2,
    name: "Product-2",
    price: "50",
    rating: 5,
  },
  {
    id: 3,
    name: "Product-3",
    price: "250",
    rating: 10,
  },
  {
    id: 4,
    name: "Product-4",
    price: "1150",
    rating: 2,
  },
  {
    id: 5,
    name: "Product-5",
    price: "100",
    rating: 1,
  },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("rating"));
  let filterProduct = product;
  const rating = parseInt(searchParams.get("rating"));
  console.log(rating);
  if (rating) {
    filterProduct = filterProduct.filter((list) => list.rating === rating);
  }
  console.log(filterProduct);

  return (
    <>
      <h2>This is Product List</h2>
      <ul>
        {filterProduct.map(({ id, name, price, rating }) => (
          <li className="product" key={id}>
            <p>Name:{name}</p>
            <p>Price:${price}</p>
            <p>Rating:{rating}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
