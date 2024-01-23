// import { useParams } from "react-router-dom";
import {
  useGamePlayerCountDown,
  useListenAdminGameAction,
  useOnboardPlayer,
} from "../hooks";
import JoiningScreen from "./components/JoiningScreen";
import { StyledLivePageWrapper } from "./style";
import GameHeader from "../../../components/GameHeader";

const LivePage = () => {
  // const params = useParams();
  const {
    onPlayerJoining,
    handlePlayerDetail,
    isPlayerOnboarded,
    playerDetails,
  } = useOnboardPlayer();

  const adminGameAction = useListenAdminGameAction();
  const { countDownNumber } = useGamePlayerCountDown();

  return (
    <StyledLivePageWrapper>
      <GameHeader gameName="Javascript trivia" />
      <div className="game-container">
        {!adminGameAction ? (
          <JoiningScreen
            getPlayerName={handlePlayerDetail}
            onGameJoin={onPlayerJoining}
            isPlayerJoined={isPlayerOnboarded}
            playerDetails={playerDetails}
          />
        ) : (
          <h1>Game will start in {countDownNumber}</h1>
        )}
      </div>
    </StyledLivePageWrapper>
  );
};

export default LivePage;
