import { StyledLiveGameWrapper } from "./style";

import { useAdminGameAction, useGetLatestPlayer } from "../hooks";
import GameHeader from "../../../components/GameHeader";
import JoinedPlayerList from "./components/JoinedPlayerList";
import { ADMIN_GAME_ACTION } from "../../../type";
import GameControl from "./components/GameControl";

function LiveGame() {
  const joinedPlayer = useGetLatestPlayer();
  const { onGamePlayPauseAction, onGameSkipQuestionAction, adminGameControl } =
    useAdminGameAction();
  return (
    <StyledLiveGameWrapper>
      <GameHeader gameName="Javascript trivia">
        <GameControl
          onGamePlayPause={onGamePlayPauseAction}
          onGameSkipQuestionAction={onGameSkipQuestionAction}
          isPlayerJoined={!!joinedPlayer.length}
          gameControl={adminGameControl}
        />
      </GameHeader>
      {adminGameControl?.[ADMIN_GAME_ACTION.PLAY_PAUSE] !==
        ADMIN_GAME_ACTION.PLAY_GAME && (
        <JoinedPlayerList
          gameControl={adminGameControl}
          joinedPlayer={joinedPlayer}
        />
      )}
    </StyledLiveGameWrapper>
  );
}

export default LiveGame;
