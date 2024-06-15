import { useState } from "react";

const EditToDo = ({ edit, item }) => {
  const [toDoValue, setToDoValue] = useState(item.task);
  const handleChange = (e) => {
    setToDoValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    edit(toDoValue.trim(), item.id);
    setToDoValue("");
  };

  return (
    <>
      <form className="todoform" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="update task"
          value={toDoValue}
          onChange={handleChange}
        />
        <button type="submit" className="todo-update">
          Update Task
        </button>
      </form>
    </>
  );
};
export default EditToDo;
