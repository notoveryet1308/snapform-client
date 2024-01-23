import { StyledGamePlay } from "./style";

import { ADMIN_GAME_ACTION, AdminGameControlType } from "../../../../../type";
import { useGameAdminCountDown } from "../../../hooks/useGamePlay";

function GamePlay({
  gameControl,
}: {
  gameControl: AdminGameControlType | null;
}) {
  const { countDownNumber } = useGameAdminCountDown();
  if (
    gameControl?.[ADMIN_GAME_ACTION.PLAY_PAUSE] !== ADMIN_GAME_ACTION.PLAY_GAME
  )
    return null;

  return <StyledGamePlay>{countDownNumber}</StyledGamePlay>;
}

export default GamePlay;
