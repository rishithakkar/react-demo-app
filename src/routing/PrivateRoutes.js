import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoutes({ isAuth, component: Component }) {
  return (
    <Route render={(props) => (!isAuth ? <Redirect to="/login" /> : <Component {...props} />)} />
  );
}
