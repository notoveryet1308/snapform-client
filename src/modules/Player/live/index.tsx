import { useParams } from "react-router-dom";
import { useOnboardPlayer } from "../hooks";
import JoiningScreen from "./components/JoiningScreen";
import { StyledLivePageWrapper } from "./style";

const LivePage = () => {
  const params = useParams();
  const { onPlayerJoining, handlePlayerDetail, isPlayerOnboarded } =
    useOnboardPlayer();

  console.log({ params });

  return (
    <StyledLivePageWrapper>
      <h1>Live user dashboard</h1>
      {!isPlayerOnboarded ? (
        <JoiningScreen
          getPlayerName={handlePlayerDetail}
          onGameJoin={onPlayerJoining}
        />
      ) : (
        <h1>Joined</h1>
      )}
    </StyledLivePageWrapper>
  );
};

export default LivePage;
