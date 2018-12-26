import { UPDATE_STATE } from "reduxStore/actionTypes";

export const updateState = newState => ({
  type: UPDATE_STATE,
  payload: {
    newState
  }
});
