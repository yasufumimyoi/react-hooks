import React, { useReducer } from "react";
import { countReducer, initialState } from "./reducer";

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default Counter;
