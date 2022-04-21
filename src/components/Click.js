import React, { useState } from "react";

function Click() {
  const [count, setCount] = useState(1);

  const handleCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Click Count: {count}</h1>
      <button onClick={handleCounter}>Increment</button>
    </>
  );
}

export default Click;
