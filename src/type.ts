export type PlayerDataType = { id: string; name: string; avatar: string };

export enum PLAYER_ACTION {
  playerOnboarding = "player-onboarding",
  playerOnboarded = "player-onboarded",
  bulkPlayerOnboarded = "bulk-player-onboarding",
}

export enum ADMIN_ACTION {
  adminOnboarding = "admin-onboarding",
  adminOnboarded = "admin-onboarded",
}

export enum ADMIN_GAME_ACTION {
  startGame = "play-game",
  pauseGame = "pause-game",
  skipQuestion = "skip-question",
}


export type playerOnboarding = {
  action: PLAYER_ACTION.playerOnboarding;
  payload: PlayerDataType;
};

export type playerOnboarded = {
  action: PLAYER_ACTION.playerOnboarded;
  payload: PlayerDataType;
};

export type bulkPlayerOnboarded = {
  action: PLAYER_ACTION.playerOnboarded;
  payload: PlayerDataType[];
};

export type messageFormat = {
  action: string;
  payload: {};
};
