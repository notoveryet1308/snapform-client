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
  PLAY_GAME = "PLAY_GAME",
  PAUSE_GAME = "PAUSE_GAME",
  SKIP_QUESTION = "SKIP_QUESTION",
  PLAY_PAUSE = "PLAY_PAUSE",
}

export type AdminGameControlType = {
  [ADMIN_GAME_ACTION.PLAY_PAUSE]:
    | ADMIN_GAME_ACTION.PLAY_GAME
    | ADMIN_GAME_ACTION.PAUSE_GAME
    | null;
  [ADMIN_GAME_ACTION.SKIP_QUESTION]: ADMIN_GAME_ACTION.SKIP_QUESTION | null;
};

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

export type messageFormat<T> = {
  action: string;
  payload: T;
};
