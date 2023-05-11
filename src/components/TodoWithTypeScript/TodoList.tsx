import React from "react";
import { Todo } from "./models/model";

interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}
const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  const handleDelete = (id: number) => {
    console.log(id);
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
    console.log(newTodo);
  };
  return (
    <div>
      <h2>TodoList</h2>
      <ul>
        {todos?.map((item) => {
          return (
            <>
              <li key={item.id}>
                {item.todo}{" "}
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
