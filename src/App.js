import "./App.css";
import React from "react";
import Header from "./components/Header";
import GenericRoute from "./routing/GenericRoutes";
import PrivateRoutes from "./routing/PrivateRoutes";
import withLogin from "./components/withLogin";
import AdminRoutes from "./routing/AdminRoutes";

function App(props) {
  const { isAuth, handleLogin } = props;
  console.log("App props: ", props, isAuth);

  return (
    <div className="ml-3">
      <button onClick={handleLogin}>{isAuth ? "Logout" : "Login"}</button>
      {isAuth && <Header />}
      {!isAuth && <GenericRoute />}
      <PrivateRoutes isAuth={isAuth} component={AdminRoutes} />
    </div>
  );
}

export default withLogin(App);
// const EnhancedComponent = higherOrderComponent(WrappedComponent);
