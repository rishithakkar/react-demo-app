import React, { useState } from 'react'

function withCounter(Component, num) {
  function Counter() {
    const [count, setCount] = useState(1);

    const handleCounter = () => {
      setCount(count + num);
    };

    return <Component count={count} handleCounter={handleCounter} />
  }
  return Counter
}

export default withCounter
