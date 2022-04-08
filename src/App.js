import "./App.css";
import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const incre = (e) => {
    setCount(count + 1);
  };

  const decre = () => {
    setCount(count - 1);
  };

  return (
    <div className="ml-3">
      <h1>Counter</h1>

      <Button type="submit" count={count} eventHandler={decre}>
        -
      </Button>
      {/* <button onClick={() => setCount(count - 2)}>-</button> */}
      <h3>{count}</h3>
      <Button type="cancel" eventHandler={incre}>
        +
      </Button>
      {/* <button onClick={incre}>+</button> */}

      <br />
      <input name={name} onChange={(e) => setName(e.target.value)} type="text" />
      <br />
      <br />

      {count % 2 == 0 ? "Even" : "Odd"}
    </div>
  );
}

export default App;
