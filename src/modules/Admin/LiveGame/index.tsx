import { StyledLiveGameWrapper } from "./style";

import { useAdminGameAction, useGetLatestPlayer } from "../hooks";
import GameHeader from "../../../components/GameHeader";
import JoinedPlayerList from "./components/JoinedPlayerList";
import GameControl from "./components/GameControl";
import GamePlay from "./components/GamePlay";
import { ADMIN_GAME_ACTION } from "../../../type";

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
      <JoinedPlayerList
        gameControl={adminGameControl}
        joinedPlayer={joinedPlayer}
      />
      {adminGameControl?.[ADMIN_GAME_ACTION.PLAY_PAUSE] ===
        ADMIN_GAME_ACTION.PLAY_GAME && (
        <GamePlay gameControl={adminGameControl} />
      )}
    </StyledLiveGameWrapper>
  );
}

export default LiveGame;
