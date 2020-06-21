import React from "react";

let count = 0;

const addCount = () => {
  console.log("Adding");
};

function App() {
  return (
    <div>
      <h2>Count</h2>
      <p>{count}</p>
      <button onClick={addCount}>+</button>
    </div>
  );
}

export default App;
