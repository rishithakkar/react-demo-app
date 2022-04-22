import React, { useState } from 'react'

function withCounter(Component) {
  function Counter() {
    const [count, setCount] = useState(1);

    const handleCounter = () => {
      setCount(count + 1);
    };

    return <Component count={count} handleCounter={handleCounter} />
  }
  return Counter
}

export default withCounter
