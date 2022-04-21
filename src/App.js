import "./App.css";
import React from "react";
import Click from "./components/Click";
import Hover from "./components/Hover";

function App() {

  return (
    <div>
      <h1>React demo application</h1>

      <Click />
      <Hover />
    </div>
  );
}

export default App;
