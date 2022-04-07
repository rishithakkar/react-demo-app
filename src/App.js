import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const incre = () => {
    setCount(count + 1);
    console.log("incre count: ", count);
  };

  return (
    <>
      <h1>Counter</h1>

      <button onClick={() => setCount(count - 2)}>-</button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <h3>{count}</h3>
      <button onClick={incre}>+</button>
    </>
  );
}

export default App;
