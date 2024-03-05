import { useParams } from "react-router-dom";
import { useGamePlayerCountDown, useListenAdminGameAction } from "../hooks";

import { StyledLivePageWrapper } from "./style";
import OnboardPlayer from "./components/OnboardPlayer";
import GameManager from "./components/GameManager";
import useGetLiveQuizById from "../../../api/hook/useGetLiveQuizById";
import Loader from "../../../components/UI/Loader";

const LivePage = () => {
  const { gameId } = useParams();

  const { isError, isLoading, data } = useGetLiveQuizById({ quizId: gameId });

  const adminGameAction = useListenAdminGameAction();
  const { countDownNumber, isCountDownDone } = useGamePlayerCountDown();

  return (
    <StyledLivePageWrapper>
      {!!isLoading && <Loader />}
      {!isLoading && !isError && data && (
        <>
          <OnboardPlayer
            adminGameAction={!!adminGameAction}
            isCountDownDone={isCountDownDone}
            countDownNumber={countDownNumber}
            gameName={data.title}
          />
          {isCountDownDone && <GameManager />}
        </>
      )}
    </StyledLivePageWrapper>
  );
};

export default LivePage;
