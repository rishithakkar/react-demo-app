import React from "react";

const Time = ({ winSize }) => {
  // Stateless component
  
  return (
    <h2>
      It is {new Date().toLocaleTimeString()}. {winSize}
    </h2>
  );
};

export default Time;
