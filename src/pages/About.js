import React from "react";
import { useLocation } from "react-router-dom";

export default function About(props) {
  // console.log("About props: ", props);

  const { state } = useLocation();
  console.log("state: ", state);
  
  return <div>About</div>;
}
