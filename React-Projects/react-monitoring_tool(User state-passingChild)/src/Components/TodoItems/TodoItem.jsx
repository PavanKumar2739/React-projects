import React, { useState } from 'react';
import './TodoItem.css';

const Todoitem = ({ todo, date, time, onRemove }) => {
  const [isChecked, setIsChecked] = useState(false); // Default to checked

  return (
    <div className="container">
      <div className="row kg-row todo-item">
        <div className="checkbox-col">
          <input
            className="checkbox"
            type="checkbox"
            id={`flexCheckChecked-${todo}`}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
        <div className="text-col">
          <p className={`todo-text ${isChecked ? 'completed' : ''}`}>{todo}</p>
        </div>
        <div className="date-col">
          <p className="date-text">{date}</p>
        </div>
        <div className="date-col">
          <p className="date-text">{time}</p>
        </div>
        <div className="button-col">
          <button type="button" className="btn btn-danger kg-button" onClick={onRemove}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todoitem;
