interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter a Task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="input__box"
        />
        <button type="submit" className="input_submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default InputField;
