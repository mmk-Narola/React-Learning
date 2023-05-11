import React, { useState } from "react";
import InputField from "./InputField";
import { Todo } from "./models/model";
import TodoList from "./TodoList";

const MainTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), todo }]);
    setTodo("");
  };
  return (
    <div>
      <h2>MainTodo with TypeScript</h2>
      <hr />
      <br />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      <br />
    </div>
  );
};

export default MainTodo;
