import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/index";
import { addBug } from "./store/actions";

const unsubscribe = store.subscribe(() => {
  console.log("Subscribe the store: ", store.getState());
});

store.dispatch(addBug("some description"));

// unsubscribe();

// store.dispatch({
//   type: "REMOVE_BUG",
//   payload: {
//     id: 1,
//   },
// });

console.log("store", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
