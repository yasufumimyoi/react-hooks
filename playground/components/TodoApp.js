import React, { useReducer } from "react";
import { todoReducer, initialState } from "../reducers/reducer";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import TodoContext from "../context/todo-context";

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <h2>Todo App</h2>
      <TodoList />
      <AddTodoForm />
    </TodoContext.Provider>
  );
};

export default TodoApp;
