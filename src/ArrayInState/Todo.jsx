import { useState, useRef } from "react";

let initialTodo = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function Todos() {
  const [name, setName] = useState("");
  const [todoArr, setTodoArra] = useState(initialTodo);

  function handleAdd() {
    setTodoArra([
      ...todoArr,
      {
        id: todoArr.length,
        name: name,
      },
    ]);

    setName("");
  }

  function handleDelete(id) {
    setTodoArra(todoArr.filter((a) => a.id !== id));
  }

  return (
    <>
      <h1>This is Todo App</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todoArr.map((list) => (
          <li key={list.id}>
            {list.name}
            {"  "}
            <button onClick={() => handleDelete(list.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
