import { combineReducers } from "redux";

import player, { initialState as initialPlayerState } from "reduxStore/reducers/player";
import enemy, { initialState as initialEnemyState } from "reduxStore/reducers/enemy";
import state, { initialState as initialStateState } from "reduxStore/reducers/state";

export const initialStore = {
  player: initialPlayerState,
  enemy: initialEnemyState,
  state: initialStateState
};

export default combineReducers({ player, enemy, state });
