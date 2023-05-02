import { useReducer } from "react";

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

export default function UseReducers5() {
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

  return (
    <div className="profile">
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.quantity})
            <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
            <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
            <button onClick={() => handleRemoveItem(item.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
