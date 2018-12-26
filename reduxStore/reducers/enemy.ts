import { UPDATE_HP_ENEMY, NEXT_ENEMY } from "reduxStore/actionTypes";
import enemiesList from "utils/enemiesList";

export const initialState = { ...enemiesList[0], id: 0 };

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_HP_ENEMY: {
      const { changeInHP } = action.payload;
      return {
        ...state,
        hp: state.hp + changeInHP
      };
    }
    case NEXT_ENEMY: {
      return {
        ...state,
        ...enemiesList[state.id + 1],
        id: state.id + 1
      };
    }
    default:
      return state;
  }
}
