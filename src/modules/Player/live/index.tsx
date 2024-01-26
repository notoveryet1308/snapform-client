// import { useParams } from "react-router-dom";
import { useGamePlayerCountDown, useListenAdminGameAction } from "../hooks";

import { StyledLivePageWrapper } from "./style";
import GameHeader from "../../../components/GameHeader";
import OnboardPlayer from "./components/OnboardPlayer";
import GameManager from "./components/GameManager";

const LivePage = () => {
  // const params = useParams();

  const adminGameAction = useListenAdminGameAction();
  const { countDownNumber, isCountDownDone } = useGamePlayerCountDown();

  return (
    <StyledLivePageWrapper>
      <GameHeader gameName="Javascript trivia" />
      <div className="game-container">
        <OnboardPlayer
          adminGameAction={!!adminGameAction}
          isCountDownDone={isCountDownDone}
          countDownNumber={countDownNumber}
        />
        {isCountDownDone && <GameManager />}
      </div>
    </StyledLivePageWrapper>
  );
};

export default LivePage;
