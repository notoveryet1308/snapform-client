import { ReactNode } from "react";
import { Play, Pause } from "phosphor-react";
import { ADMIN_GAME_ACTION } from "../../../../../type";

export const getPlayPauseIcon = ({
  playPauseActionValue,
}: {
  playPauseActionValue:
    | null
    | ADMIN_GAME_ACTION.PLAY_GAME
    | ADMIN_GAME_ACTION.PAUSE_GAME;
}): ReactNode => {
  if (
    playPauseActionValue === null ||
    playPauseActionValue === ADMIN_GAME_ACTION.PAUSE_GAME
  ) {
    return <Play />;
  }
  if (playPauseActionValue === ADMIN_GAME_ACTION.PLAY_GAME) return <Pause />;
};
