import { UPDATE_STATE } from "reduxStore/actionTypes";

export const initialState = "intro";

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STATE: {
      const { newState } = action.payload;
      return newState;
    }
    default:
      return state;
  }
}
