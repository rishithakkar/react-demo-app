import React from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const LoginSucc = true;
  const history = useHistory();

  const handleLogin = () => {
    if (LoginSucc) {
      history.push({
        pathname: "/about",
        state: { loginSuc: true, token: "abvcksbdjfb" },
      });
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div>
      UserName: Rishi
      <br />
      Password: Rishi
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
