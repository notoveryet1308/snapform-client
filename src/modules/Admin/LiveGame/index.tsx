import { StyledLiveGameWrapper } from "./style";

import { useAdminGameAction, useGetLatestPlayerForAdmin } from "../hooks";
import { LiveGameHeader } from "../../../components/Header";
import JoinedPlayerList from "./components/JoinedPlayerList";
import GameControl from "./components/GameControl";
import GamePlay from "./components/GamePlay";
import { ADMIN_GAME_ACTION } from "../../../type";
import { useParams } from "react-router-dom";
import useGetLiveQuizById from "../../../api/hook/useGetLiveQuizById";
import Loader from "../../../components/UI/Loader";

function LiveGame() {
  const { gameId } = useParams();
  const { isError, isLoading, data } = useGetLiveQuizById({
    quizId: gameId,
  });
  const joinedPlayer = useGetLatestPlayerForAdmin();
  const { onGamePlayPauseAction, onGameSkipQuestionAction, adminGameControl } =
    useAdminGameAction();

  return (
    <StyledLiveGameWrapper>
      {isLoading && <Loader />}
      {!isError && !isLoading && data && (
        <>
          <LiveGameHeader
            gameName={data.title}
            isLive
            livePlayerCount={joinedPlayer.length}
            playerDetail={null}
          />
          <GameControl
            onGamePlayPause={onGamePlayPauseAction}
            onGameSkipQuestionAction={onGameSkipQuestionAction}
            isPlayerJoined={!!joinedPlayer.length}
            gameControl={adminGameControl}
          />
          <JoinedPlayerList
            gameControl={adminGameControl}
            joinedPlayer={joinedPlayer}
          />
          {adminGameControl?.[ADMIN_GAME_ACTION.PLAY_PAUSE] ===
            ADMIN_GAME_ACTION.PLAY_GAME && (
            <GamePlay gameControl={adminGameControl} />
          )}
        </>
      )}
    </StyledLiveGameWrapper>
  );
}

export default LiveGame;
