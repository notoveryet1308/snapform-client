import Countdown from "../../../../../components/Countdown";
import { LiveGameHeader } from "../../../../../components/Header";
import Loader from "../../../../../components/UI/Loader";
import { QUIZ_STATUS } from "../../../../../type";
import { useOnboardPlayer } from "../../../hooks";
import { useGetLatestPlayerForPlayer } from "../../../hooks/useGetLatestPlayerForPlayer";
import GameManager from "../GameManager";
import JoiningScreen from "../JoiningScreen";

import { StyledOnboardPlayerWrapper } from "./style";

function OnboardGame({
  adminGameAction,
  isCountDownDone,
  countDownNumber,
  gameName,
  isQuizLive,
  gameId,
}: {
  adminGameAction: boolean;
  isCountDownDone: boolean;
  countDownNumber: number | undefined;
  gameName: string;
  isQuizLive: QUIZ_STATUS;
  gameId: string;
}) {
  const {
    onPlayerJoining,
    handlePlayerDetail,
    isPlayerOnboarded,
    playerDetails,
  } = useOnboardPlayer();
  const joinedPlayer = useGetLatestPlayerForPlayer();
  return (
    <>
      <LiveGameHeader
        gameName={gameName}
        isLive={isQuizLive === QUIZ_STATUS.LIVE}
        livePlayerCount={joinedPlayer.length}
        playerDetail={isPlayerOnboarded ? playerDetails : null}
      />
      <StyledOnboardPlayerWrapper>
        {isQuizLive === QUIZ_STATUS.LIVE ? (
          <>
            {!adminGameAction ? (
              <JoiningScreen
                getPlayerName={handlePlayerDetail}
                onGameJoin={onPlayerJoining}
                isPlayerJoined={isPlayerOnboarded}
                playerDetails={playerDetails}
              />
            ) : !isCountDownDone ? (
              countDownNumber ? (
                <Countdown countdownNumber={countDownNumber} />
              ) : (
                <Loader />
              )
            ) : null}
          </>
        ) : (
          <p>This quiz is not live..!</p>
        )}

        {isCountDownDone && (
          <GameManager playerDetail={playerDetails} quizId={gameId} />
        )}
      </StyledOnboardPlayerWrapper>
    </>
  );
}

export default OnboardGame;
