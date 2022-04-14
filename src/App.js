import "./App.css";
import React, { useEffect } from "react";
import Button from "./components/Button";
import Home from "./components/Home";

const getState = () => {
  return 0;
};

function App() {
  const [count, setCount] = React.useState(() => getState());
  const [name, setName] = React.useState("");
  const [oddNo, setOddNo] = React.useState(false);

  useEffect(() => {
    if (count % 2 === 0) {
      setOddNo(false);
    } else {
      setOddNo(true);
    }
  }, [count]);

  const incre = (e) => {
    setCount(count + 2);
  };

  const decre = () => {
    setCount(count - 1);
  };

  return (
    <div className="ml-3">
      <h1>Counter</h1>

      <Button type="submit" oddNo={oddNo} count={count} eventHandler={decre}>
        -
      </Button>
      {/* <button onClick={() => setCount(count - 2)}>-</button> */}
      <h3>{count}</h3>
      <Button type="cancel" oddNo={oddNo} count={count} eventHandler={incre}>
        +
      </Button>
      {/* <button onClick={incre}>+</button> */}

      <br />
      <input name={name} onChange={(e) => setName(e.target.value)} type="text" />
      <br />
      <br />

      {/* {oddNo ? "Odd" : "Even"} */}
      <Home />
    </div>
  );
}

export default App;
