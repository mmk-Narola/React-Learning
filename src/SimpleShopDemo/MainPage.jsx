import React, { useReducer } from "react";
import Cart from "./Cart";

export const CartContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
      };
    default:
      throw new Error("Invalid action");
  }
}

export default function MainPage() {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  function handleAddItem() {
    const newItem = {
      id: state.items.length + 1,
      name: `Item ${state.items.length + 1}`,
      quantity: 1,
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
  }

  function handleRemoveItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  function handleIncrementQuantity(id) {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  }

  function handleDecrementQuantity(id) {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  }
  console.log(state);
  return (
    <CartContext.Provider value={{ cartItem: state?.items?.length }}>
      <div className="profile">
        <Cart />
        <h2>Use Reducers Shop Cart item </h2>
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              {item.name} ({item.quantity})
              <button onClick={() => handleIncrementQuantity(item.id)}>
                +
              </button>
              <button onClick={() => handleDecrementQuantity(item.id)}>
                -
              </button>
              <button onClick={() => handleRemoveItem(item.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </CartContext.Provider>
  );
}

// MainPage
