import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { eventHandler, children, type, oddNo, count } = props;

  // useEffect(() => {
  //   (async () => {
  //     const data = await getData();
  //     console.log("Self call fun: ", data);
  //   })();
  // }, [oddNo]);

  // const getData = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({ name: "rishi" });
  //     }, 2000);
  //   });
  // };

  const btnStyle = { backgroundColor: type === "submit" ? "#7076f3" : "#f66464" };

  return (
    <button className="button" style={btnStyle} onClick={eventHandler}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  eventHandler: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: "submit",
};

export default Button;
