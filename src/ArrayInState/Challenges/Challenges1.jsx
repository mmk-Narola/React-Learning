import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function Challenges1() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    const nextCounter = products.map((c) => {
      if (c.id === productId) {
        return {
          ...c,
          count: c.count + 1,
        };
      } else {
        return c;
      }
    });
    setProducts(nextCounter);
  }

  function handleDecreaseClick(productId) {
    let nextCounter = products.map((c) => {
      if (c.id === productId) {
        if (c.count > 0) {
          return {
            ...c,
            count: c.count - 1,
          };
        }
      } else {
        return c;
      }
    });
    nextCounter = nextCounter.filter((p) => p.count > 0);
    setProducts(nextCounter);
  }

  return (
    <>
      <h1>Shoping Cart Challenges</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <button
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                handleDecreaseClick(product.id);
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
