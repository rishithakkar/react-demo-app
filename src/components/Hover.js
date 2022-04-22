import React from "react";
import withCounter from "./withCounter";

function Hover(props) {

  return (
    <>
      <br />
      <br />
      <button onMouseOver={props.handleCounter}>Hover Count: {props.count}</button>
    </>
  );
}

export default withCounter(Hover);
