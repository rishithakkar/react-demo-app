import * as actions from "../actionTypes";

const initialState = {
  token: "",
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.LOGGED_IN:
      return { ...state, token: payload.token };

    default:
      return state;
  }
}
