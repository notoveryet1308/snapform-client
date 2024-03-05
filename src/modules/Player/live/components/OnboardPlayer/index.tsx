import Countdown from "../../../../../components/Countdown";
import { LiveGameHeader } from "../../../../../components/Header";
import Loader from "../../../../../components/UI/Loader";
import { useOnboardPlayer } from "../../../hooks";
import { useGetLatestPlayerForPlayer } from "../../../hooks/useGetLatestPlayerForPlayer";
import JoiningScreen from "../JoiningScreen";

import { StyledOnboardPlayerWrapper } from "./style";

function OnboardPlayer({
  adminGameAction,
  isCountDownDone,
  countDownNumber,
  gameName,
}: {
  adminGameAction: boolean;
  isCountDownDone: boolean;
  countDownNumber: number | undefined;
  gameName: string
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
        isLive
        livePlayerCount={joinedPlayer.length}
        playerDetail={isPlayerOnboarded ? playerDetails : null}
      />
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
    </>
  );
}

export default OnboardPlayer;
