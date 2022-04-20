import "./App.css";
import React from "react";
import Home from "./components/Home";
import About from "./pages/About";
import { Switch, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Header from "./components/Header";
import Login from "./pages/Login";

function App() {
  return (
    <div className="ml-3">
      <Header />
      <br />
      <Login />
      <br />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/blog/:blogId?" component={(props) => <Blog name="rishi" {...props} />} />

        <Route component={() => <h1>Page not found!</h1>} />
      </Switch>
    </div>
  );
}

export default App;
