import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  return (
    <>
      <h2>Add Todos</h2>

      <input
        placeholder="Add Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={() => {
          setTitle(" ");
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTodo;
