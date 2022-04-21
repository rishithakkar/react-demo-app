import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoutes({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (!isAuth ? <Redirect to="/login" /> : <Component {...props} />)}
    />
  );
}
