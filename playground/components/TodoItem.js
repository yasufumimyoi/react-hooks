import React, { useContext } from "react";
import TodoContext from "../context/todo-context";

const TodoItem = ({ id, title, body }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li key={id}>
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={() => dispatch({ type: "remove", id })}>Remove</button>
    </li>
  );
};

export default TodoItem;
