import React, { useState, useEffect } from "react";
import TodoForm from "./todofom";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todos";
import EditToDo from "./Edittodoform";

uuidv4();

const TodoContainer = () => {
  const [toDoItems, setToDoItems] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );

  //   useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem('todos'));
  //   console.log("ddddd", storedTodos);
  //   if (storedTodos) {
  //     setToDoItems(storedTodos);
  //   }
  // }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDoItems));
  }, [toDoItems]);

  const addItems = (item) => {
    setToDoItems([
      ...toDoItems,
      { id: uuidv4(), task: item, completed: false, isEditing: false },
    ]);
  };
  const toggleTask = (id) => {
    setToDoItems(
      toDoItems.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      })
    );
  };
  const deleteTask = (id) => {
    const filterArray = toDoItems.filter((item) => item.id !== id);
    setToDoItems(filterArray);
  };
  const editTask = (id) => {
    const array = toDoItems.map((item) => {
      return item.id === id ? { ...item, isEditing: !item.isEditing } : item;
    });
    setToDoItems(array);
  };
  const editToDo = (value, id) => {
    value.length === 0
      ? deleteTask(id)
      : setToDoItems(
          toDoItems.map((item) => {
            return item.id === id
              ? { ...item, task: value, isEditing: !item.isEditing }
              : item;
          })
        );
  };
  const handleClear = () => {
    setToDoItems([]);
  };

  return (
    <div className="todoContainer">
      <TodoForm add={addItems} />
      {toDoItems.map((item) => {
        return item.isEditing ? (
          <EditToDo edit={editToDo} item={item} />
        ) : (
          <Todo
            items={item}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
            key={item.id}
          />
        );
      })}
      {toDoItems.length > 0 && (
        <button className="clear-btn" onClick={handleClear}>
          clear list
        </button>
      )}
    </div>
  );
};
export default TodoContainer;
