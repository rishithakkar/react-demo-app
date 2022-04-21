import "./App.css";
import React from "react";
import Header from "./components/Header";
import GenericRoute from "./routing/GenericRoutes";
import PrivateRoutes from "./routing/PrivateRoutes";
import HandleLogin from "./components/HandleLogin";
import AdminRoutes from "./routing/AdminRoutes";

function App(props) {
  const { isAuth, handleLogin } = props;
  console.log("App props: ", props, isAuth);

  return (
    <div className="ml-3">
      <button onClick={handleLogin}>Login</button>
      {isAuth && <Header />}
      {!isAuth && <GenericRoute />}
      <PrivateRoutes isAuth={isAuth} component={AdminRoutes} />
    </div>
  );
}

export default HandleLogin(App);
// const EnhancedComponent = higherOrderComponent(WrappedComponent);
