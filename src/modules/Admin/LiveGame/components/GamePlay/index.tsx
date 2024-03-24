import { ADMIN_GAME_ACTION, AdminGameControlType } from "../../../../../type";
import { useGameAdminCountDown } from "../../../hooks/useGamePlay";
import GameManager from "../GameManager";
import Countdown from "../../../../../components/Countdown";
import Loader from "../../../../../components/UI/Loader";

function GamePlay({
  gameControl,
  gameId,
}: {
  gameControl: AdminGameControlType | null;
  gameId: string;
}) {
  const { countDownNumber, isCountDownDone } = useGameAdminCountDown();
  if (
    gameControl?.[ADMIN_GAME_ACTION.PLAY_PAUSE] !== ADMIN_GAME_ACTION.PLAY_GAME
  )
    return null;

  return (
    <>
      {!isCountDownDone ? (
        countDownNumber ? (
          <Countdown countdownNumber={countDownNumber} />
        ) : (
          <Loader />
        )
      ) : (
        <GameManager
          playerDetail={{ id: "Admin", name: "Admin", isAdmin: true }}
          quizId={gameId}
        />
      )}
    </>
  );
}

export default GamePlay;
