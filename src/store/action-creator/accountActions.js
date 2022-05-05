import * as actions from "../actionTypes";

export const depositMoneyAction = (amount) => {
  return {
    type: actions.DEPOSIT,
    payload: {
      amount,
    },
  };
};

export const withdrawMoneyFun = (amount) => {
    return {
      type: actions.WITHDRAW,
      payload: {
        amount,
      },
    };
  };