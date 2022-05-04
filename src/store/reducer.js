// bugs: []

import * as actions from "./actionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
  const payload = "defaul";
  const { type, payload: pld } = action;

  switch (type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: pld.desc,
          resolved: false,
        },
      ];

    default:
      return state;
  }
}
