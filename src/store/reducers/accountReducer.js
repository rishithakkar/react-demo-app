import * as actions from "../actionTypes";

export default function reducer(state = 0, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.DEPOSIT:
      return state + payload.amount;

    case actions.WITHDROW:
      return state - payload.amount;

    default:
      return state;
  }
}
