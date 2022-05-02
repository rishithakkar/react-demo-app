import * as actions from "./actionTypes";

export const addBug = (description) => ({
  type: actions.ADD_BUG,
  payload: {
    description,
  },
});
