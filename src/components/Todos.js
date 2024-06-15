import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Todo = ({ items, toggleTask, deleteTask, editTask }) => {
  const { task, completed, id } = items;
  return (
    <div className="todo">
      <p
        onClick={() => toggleTask(id)}
        className={`${completed ? "completed" : ""}`}
      >
        {task}
      </p>
      <div className="icons">
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTask(id)} />
        <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteTask(id)} />
      </div>
    </div>
  );
};
export default Todo;
