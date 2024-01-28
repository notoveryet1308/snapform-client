import { Stop } from "phosphor-react";

import { PrimaryButton } from "../../../../../components/UI/Button";
import { ADMIN_GAME_ACTION, AdminGameControlType } from "../../../../../type";
import { getPlayPauseIcon } from "./config";

import { StyledGameControlWrapper } from "./style";

function GameControl({
  gameControl,
  isPlayerJoined,
  onGameSkipQuestionAction,
  onGamePlayPause,
}: {
  gameControl: AdminGameControlType | null;
  isPlayerJoined: boolean;
  onGameSkipQuestionAction: () => void;
  onGamePlayPause: () => void;
}) {
  return (
    <StyledGameControlWrapper>
      <PrimaryButton
        onlyIcon={true}
        shape="circle"
        icon={getPlayPauseIcon({
          playPauseActionValue:
            gameControl?.[ADMIN_GAME_ACTION.PLAY_PAUSE] || null,
        })}
        disabled={!isPlayerJoined}
        onClick={onGamePlayPause}
      />

      <PrimaryButton
        onlyIcon={true}
        shape="circle"
        icon={<Stop />}
        disabled={!isPlayerJoined}
        onClick={onGameSkipQuestionAction}
      />
    </StyledGameControlWrapper>
  );
}

export default GameControl;
