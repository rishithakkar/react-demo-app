import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function HandleLogin(Component) {
  function Login(props) {
    const history = useHistory()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      console.log("Called handle login ", !isLoggedIn);
      // API call /login
      setIsLoggedIn(!isLoggedIn);
      history.push("/")
    };

    return <Component isAuth={isLoggedIn} handleLogin={handleLogin} />;
  }
  return Login;
}

export default HandleLogin;
