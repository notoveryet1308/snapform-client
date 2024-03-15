import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGamePlayerCountDown,
  useListenAdminGameAction,
  useQuizLiveStatus,
} from "../hooks";

import { StyledLivePageWrapper } from "./style";
import OnboardPlayer from "./components/OnboardPlayer";
import GameManager from "./components/GameManager";
import useGetLiveQuizById from "../../../api/hook/useGetLiveQuizById";
import Loader from "../../../components/UI/Loader";
import { useLivePlayerSocket } from "../../../Context/livePlayerSocketProvider";
import { QUIZ_DATA_ACTION, QUIZ_STATUS } from "../../../type";

const LivePage = () => {
  const { gameId } = useParams();
  const playerSocket = useLivePlayerSocket();

  const { isError, isLoading, data } = useGetLiveQuizById({ quizId: gameId });

  const adminGameAction = useListenAdminGameAction();
  const { countDownNumber, isCountDownDone } = useGamePlayerCountDown();
  const { isQuizLive } = useQuizLiveStatus();

  useEffect(() => {
    if (playerSocket && !isError && !isLoading && data) {
      const message = {
        action: QUIZ_DATA_ACTION.LIVE_QUIZ_ID,
        payload: gameId,
      };
      playerSocket.send(JSON.stringify(message));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isLoading, data, playerSocket]);

  return (
    <StyledLivePageWrapper>
      {!!isLoading && <Loader />}
      {!isLoading &&
        !isError &&
        data &&
        (isQuizLive === QUIZ_STATUS.FETCHING ? (
          <Loader loadingText="Fetching quiz data..." />
        ) : (
          <>
            <OnboardPlayer
              adminGameAction={!!adminGameAction}
              isCountDownDone={isCountDownDone}
              countDownNumber={countDownNumber}
              gameName={data.title}
              isQuizLive={isQuizLive}
            />
            {isCountDownDone && <GameManager />}
          </>
        ))}
    </StyledLivePageWrapper>
  );
};

export default LivePage;
