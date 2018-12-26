import { UPDATE_HP_ENEMY, NEXT_ENEMY } from "reduxStore/actionTypes";

export const updateEnemyHP = changeInHP => ({
  type: UPDATE_HP_ENEMY,
  payload: {
    changeInHP
  }
});

export const nextEnemy = () => ({
  type: NEXT_ENEMY
})