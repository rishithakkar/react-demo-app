import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";

export default function GenericRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/login" component={Login} />

      <Route path="/" component={() => <h1>Page not found!</h1>} />
    </Switch>
  );
}
