import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../context/todo-context";

const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <ul>
      {state.map((item) => {
        return <TodoItem key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default TodoList;
