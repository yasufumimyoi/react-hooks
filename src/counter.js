import React, { useReducer } from "react";
import { reducerFunction, initialState } from "./reducer";

const Counter = () => {
  const [count, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
    </div>
  );
};

export default Counter;
