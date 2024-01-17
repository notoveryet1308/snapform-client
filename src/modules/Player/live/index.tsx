import { useParams } from "react-router-dom";
import { useListenAdminGameAction, useOnboardPlayer } from "../hooks";
import JoiningScreen from "./components/JoiningScreen";
import { StyledLivePageWrapper } from "./style";
import GameHeader from "../../../components/GameHeader";
import { ADMIN_GAME_ACTION } from "../../../type";

const LivePage = () => {
  const params = useParams();
  const {
    onPlayerJoining,
    handlePlayerDetail,
    isPlayerOnboarded,
    playerDetails,
  } = useOnboardPlayer();

  const adminGameAction = useListenAdminGameAction();
  console.log({ params });

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
          <h1>{adminGameAction?.[ADMIN_GAME_ACTION.PLAY_PAUSE]}</h1>
        )}
      </div>
    </StyledLivePageWrapper>
  );
};

export default LivePage;
