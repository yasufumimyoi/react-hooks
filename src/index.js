import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { countReducer, initialState } from "./reducer";

const CountApp = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <h3>Count App</h3>
      <h4>Count: {state.count}</h4>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <CountApp />
  </React.StrictMode>,
  document.getElementById("root")
);
