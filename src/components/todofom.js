import { useState } from "react";

const TodoForm = ({ add }) => {
  const [inputValue, setInputValue] = useState("");
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) {
      setIsEmptyInput(true);
    } else {
      setIsEmptyInput(false);
      add(inputValue.trim());
    }
    setInputValue("");
  };
  // console.log(props);
  return (
    <>
      <h1>Task for Today</h1>
      <form className="todoform" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="✍ Add the task "
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className="todo-submit">
          Submit Task
        </button>
      </form>
      {isEmptyInput && <p className="empty-msg">*please enter task</p>}
    </>
  );
};
export default TodoForm;
