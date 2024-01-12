import { StyledLiveGameWrapper } from "./style";

import { useGetLatestPlayer } from "../hooks";
import PlayerPreview from "../../../components/PlayerPreview";

function LiveGame() {
  const joinedPlayer = useGetLatestPlayer();

  return (
    <StyledLiveGameWrapper>
      <div className="live-game-header">Game name here...</div>
      <div className="player-joined-wrapper">
        {joinedPlayer.length > 0 &&
          joinedPlayer.map(({ id, name, avatar }) => (
            <PlayerPreview key={id} id={id} name={name} avatar={avatar} />
          ))}
      </div>
    </StyledLiveGameWrapper>
  );
}

export default LiveGame;
