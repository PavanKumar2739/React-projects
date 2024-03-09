import Todoitem from "./TodoItem";
import { useState } from "react";
import './TodoItem.css';

const AddTodo = () => {
  const [todos, setTodos] = useState([]);
  const [work, setWork] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const addItems = () => {
    const newTodo = {
      id: new Date().getTime(),
      work,
      date,
      time,
    };

    setTodos((prev) => [...prev, newTodo]);
    setWork("");
    setDate("");
    setTime("");
  };

  const removeItem = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <div className="kg-row">
        <div className="col-sm-4">
          <input
            type="text"
            placeholder="Enter Task"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
        </div>
        <div className="col-sm-2">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-sm-2">
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            onClick={() => addItems()}
            className="btn btn-success kg-button"
          >
            Add
          </button>
        </div>
      </div>
      <div className="text-rows">
        {todos.map((todo) => (
          <Todoitem
            key={todo.id}
            todo={todo.work}
            date={todo.date}
            time={todo.time}
            onRemove={() => removeItem(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AddTodo;
