import Countdown from "../../../../../components/Countdown";
import { LiveGameHeader } from "../../../../../components/Header";
import Loader from "../../../../../components/UI/Loader";
import { QUIZ_STATUS } from "../../../../../type";
import { useOnboardPlayer } from "../../../hooks";
import { useGetLatestPlayerForPlayer } from "../../../hooks/useGetLatestPlayerForPlayer";
import JoiningScreen from "../JoiningScreen";

import { StyledOnboardPlayerWrapper } from "./style";

function OnboardPlayer({
  adminGameAction,
  isCountDownDone,
  countDownNumber,
  gameName,
  isQuizLive,
}: {
  adminGameAction: boolean;
  isCountDownDone: boolean;
  countDownNumber: number | undefined;
  gameName: string;
  isQuizLive: QUIZ_STATUS;
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
      {isQuizLive === QUIZ_STATUS.LIVE ? (
        <StyledOnboardPlayerWrapper>
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
        </StyledOnboardPlayerWrapper>
      ) : (
        <p>This quiz is not live..!</p>
      )}
    </>
  );
}

export default OnboardPlayer;
