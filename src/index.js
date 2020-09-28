import React, { useReducer, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { todoReducer, initialState } from "./reducer";

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");

  console.log(state);

  const handleChange = useCallback(
    (e) => {
      setInput(e.target.value);
    },
    [setInput]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      id: Math.round(Math.random(10) + 5),
      title: input,
    });
    setInput("");
  };

  return (
    <div>
      <h3>Todo App</h3>
      {state.map((item) => {
        return (
          <div>
            <li key={item.id}>{item.title}</li>
            <button onClick={() => dispatch({ type: "remove", id: item.id })}>
              Remove
            </button>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
