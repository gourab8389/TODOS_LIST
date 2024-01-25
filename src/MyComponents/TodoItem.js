import React from 'react';
import './todoItem.css'; // Use the correct case for the file name

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todoItemContainer">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm deleteButton" onClick={() => onDelete(todo)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;

