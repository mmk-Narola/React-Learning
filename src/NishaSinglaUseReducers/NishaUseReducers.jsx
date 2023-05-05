import { useReducer } from "react";

const TODOS_ACTION = {
  ONCHANGE_TASK: "changed_draft",
  ADD_TASK: "added_todo",
  DELETE_TASK: "delete_todo",
};

function createInitialState() {
  const initialTodos = [];
  return {
    onChangeValue: "",
    todos: initialTodos,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case TODOS_ACTION.ONCHANGE_TASK: {
      return {
        onChangeValue: action.payload,
        todos: state.todos,
      };
    }
    case TODOS_ACTION.ADD_TASK: {
      return {
        onChangeValue: "",
        todos: [
          {
            id: state.todos.length,
            text: state.onChangeValue,
          },
          ...state.todos,
        ],
      };
    }
    case TODOS_ACTION.DELETE_TASK: {
      return {
        onChangeValue: "",
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    }

    default:
      throw new Error("Invalid Error");
  }
}

export default function NishaUseReducers() {
  const [state, dispatch] = useReducer(reducer, createInitialState());
  return (
    <div className="profile">
      <input
        value={state.onChangeValue}
        onChange={(e) => {
          dispatch({
            type: TODOS_ACTION.ONCHANGE_TASK,
            payload: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: TODOS_ACTION.ADD_TASK });
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.map((item) => (
          <li key={item.id}>
            {item.text} {"  "}
            <button
              onClick={() => {
                dispatch({ type: TODOS_ACTION.DELETE_TASK, payload: item.id });
              }}
            >
              Delete
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

// NishaUseReducers;
