import { useState } from "react";

const TaskList = ({ todos, onDeleteTodo, onChangeTodo }) => {
  return (
    <>
      <h2>TaskList</h2>
      <ul>
        {todos.map((list) => (
          <li key={list.id}>
            <Task todo={list} onChange={onChangeTodo} onDelete={onDeleteTodo} />
            {/* {list.title}
            <button onClick={() => onDeleteTodo(list.id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [disDel, setDisDel] = useState(false);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />

        <button
          onClick={() => {
            setIsEditing(false), setDisDel(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title} {"  "}
        <button
          onClick={() => {
            setIsEditing(true);
            setDisDel(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent} {"  "}
      <button disabled={disDel} onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </label>
  );
}
