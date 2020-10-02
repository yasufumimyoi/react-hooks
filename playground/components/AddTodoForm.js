import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoContext from "../context/todo-context";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      id: uuidv4(),
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTodoForm;
