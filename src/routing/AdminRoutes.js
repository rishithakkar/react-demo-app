import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";

export default function AdminRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/about" component={About} />
      <Route path="/blog/:blogId?" component={(props) => <Blog name="rishi" {...props} />} />

      <Route component={() => <h1>Page not found!</h1>} />
    </Switch>
  );
}
