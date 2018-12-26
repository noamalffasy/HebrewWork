import { UPDATE_HP_PLAYER } from "reduxStore/actionTypes";

export const updatePlayerHP = changeInHP => ({
  type: UPDATE_HP_PLAYER,
  payload: {
    changeInHP
  }
});
