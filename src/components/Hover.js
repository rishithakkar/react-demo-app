import React, { useState } from "react";

function Hover() {
  const [count, setCount] = useState(1);

  const handleCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <br />
      <br />
      <button onMouseOver={handleCounter}>Hover Count: {count}</button>
    </>
  );
}

export default Hover;
