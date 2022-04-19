import "./App.css";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./pages/About";
import { Switch } from "react-router-dom";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="ml-3">
      <h1>New Application for React Router</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/blog/rishi" component={Blog} />

        <Route component={() => <h1>Page not found!</h1>} />
      </Switch>
    </div>
  );
}

export default App;
