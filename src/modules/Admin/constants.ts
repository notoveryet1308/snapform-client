import { ADMIN_GAME_ACTION } from "../../type";

export const ADMIN_GAME_ACTION_DATA = {
  [ADMIN_GAME_ACTION.startGame]: {
    action: ADMIN_GAME_ACTION.startGame,
    payload: "START_GAME",
  },
  [ADMIN_GAME_ACTION.pauseGame]: {
    action: ADMIN_GAME_ACTION.pauseGame,
    payload: "PAUSE_GAME",
  },
};
