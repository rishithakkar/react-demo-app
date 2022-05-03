import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./store/actionTypes";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const depositMoney = () => {
    dispatch({
      type: actions.DEPOSIT,
      payload: {
        amount: 100,
      },
    });
  };

  const withdrawMoney = () => {
    dispatch({
      type: actions.WITHDROW,
      payload: {
        amount: 100,
      },
    });
  };

  const login = () => {
    dispatch({
      type: actions.UPDATE_TOKEN,
      payload: {
        token: "new-token-after-success-logged-in",
      },
    });
  };

  console.log("state", state);

  return (
    <div>
      <h1>React demo application</h1>
      <button onClick={depositMoney}>Deposit</button>
      <h2>{state.account}</h2>
      <button onClick={withdrawMoney}>Withdraw</button>

      <br />
      <br />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
