import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <h4>Add Task</h4>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText(""), onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
