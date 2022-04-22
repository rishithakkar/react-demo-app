import React from "react";
import withCounter from "./withCounter";

function Click(props) {

  return (
    <>
      <h1>Click Count: {props.count}</h1>
      <button onClick={props.handleCounter}>Increment</button>
    </>
  );
}

export default withCounter(Click);
// const EnhancedComponent = higherOrderComponent(WrappedComponent);