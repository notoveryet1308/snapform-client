import Countdown from "../../../../../components/Countdown";
import Loader from "../../../../../components/UI/Loader";
import { useOnboardPlayer } from "../../../hooks";
import JoiningScreen from "../JoiningScreen";

function OnboardPlayer({
  adminGameAction,
  isCountDownDone,
  countDownNumber,
}: {
  adminGameAction: boolean;
  isCountDownDone: boolean;
  countDownNumber: number | undefined;
}) {
  const {
    onPlayerJoining,
    handlePlayerDetail,
    isPlayerOnboarded,
    playerDetails,
  } = useOnboardPlayer();
  return (
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
  );
}

export default OnboardPlayer;
