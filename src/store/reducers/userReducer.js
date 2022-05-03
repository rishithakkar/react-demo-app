import * as actions from "../actionTypes";

export default function reducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.UPDATE_TOKEN:
      return { ...state, token: payload.token };

    default:
      return state;
  }
}
