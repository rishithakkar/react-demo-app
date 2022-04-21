import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import withLogin from "../components/withLogin";

function Login(props) {
  // const LoginSucc = true;
  const history = useHistory();

  // const handleLogin = () => {
  //   if (LoginSucc) {
  //     history.push({
  //       pathname: "/about",
  //       state: { loginSuc: true, token: "abvcksbdjfb" },
  //     });
  //   } else {
  //     alert("Wrong credentials");
  //   }
  // };

  // const { handleLogin } = props;

  return (
    <div>
      UserName: Rishi
      <br />
      Password: Rishi
      <br />
      {/* <button onClick={handleLogin}>Login</button> */}
      <Link to="/about" >About</Link>
    </div>
  );
}

export default withLogin(Login);
