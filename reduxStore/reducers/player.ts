import { UPDATE_HP_PLAYER } from "reduxStore/actionTypes";

export const initialState = {
  hp: 100,
  maxHP: 100,
  name: "במבה",
  srcName: "character"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_HP_PLAYER: {
      const { changeInHP } = action.payload;
      return {
        ...state,
        hp: state.hp + changeInHP
      };
    }
    default:
      return state;
  }
}
