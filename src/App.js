import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./store/actionTypes";

function App() {
  const account = useSelector((state) => state.account);
  console.log("account", account);

  const dispatch = useDispatch();

  const depositeMoney = () => {
    dispatch({
      type: actions.DEPOSIT,
      payload: {
        amount: 200,
      },
    });
  };

  const withdrawMoney = () => {
    dispatch({
      type: actions.WITHDRAW,
      payload: {
        amount: 100,
      },
    });
  };

  return (
    <div style={{ margin: "3rem" }}>
      <h1>React demo application</h1>
      <button onClick={depositeMoney}>Deposit</button>
      <h2>{account}</h2>
      <button onClick={withdrawMoney}>Withdraw</button>
    </div>
  );
}

export default App;
