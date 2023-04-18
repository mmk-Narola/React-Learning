import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

let nextId = 3;
const Challenges2 = () => {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function handleDeleteTodoId(todoId) {
    setTodos(todos.filter((todoList) => todoList.id !== todoId));
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  return (
    <>
      <h2>Fix the mutations using non-mutative methods </h2>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onDeleteTodo={handleDeleteTodoId}
        onChangeTodo={handleChangeTodo}
      />
    </>
  );
};

export default Challenges2;
