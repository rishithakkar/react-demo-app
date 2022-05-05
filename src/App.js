import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./store/actionTypes";
import { depositMoneyAction, withdrawMoneyFun } from "./store/action-creator/accountActions";

function App() {
  const account = useSelector((state) => state.account);
  const state = useSelector((state) => state);
  console.log("state", state);

  const dispatch = useDispatch();

  const depositMoney = () => {
    dispatch(depositMoneyAction(200));
  };

  const withdrawMoney = () => {
    dispatch(withdrawMoneyFun(100));
  };

  const login = () => {
    // API
    dispatch({
      type: actions.LOGGED_IN,
      payload: {
        token: "jwt-token",
      },
    });
  };

  // do logout

  return (
    <div style={{ margin: "3rem" }}>
      <h1>React demo application</h1>
      <button onClick={depositMoney}>Deposit</button>
      <h2>{account}</h2>
      <button onClick={withdrawMoney}>Withdraw</button>

      <br />
      <br />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
