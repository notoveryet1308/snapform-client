import { StyledJoinedPlayerList } from "./style";
import PlayerPreview from "../../../../../components/PlayerPreview";
import {
  ADMIN_GAME_ACTION,
  AdminGameControlType,
  PlayerDataType,
} from "../../../../../type";
import Loader from "../../../../../components/UI/Loader";

function JoinedPlayerList({
  gameControl,
  joinedPlayer = [],
}: {
  gameControl: AdminGameControlType | null;
  joinedPlayer: PlayerDataType[];
}) {
  if (
    gameControl?.[ADMIN_GAME_ACTION.PLAY_PAUSE] ===
      ADMIN_GAME_ACTION.PLAY_GAME ||
    gameControl?.[ADMIN_GAME_ACTION.PLAY_PAUSE] === ADMIN_GAME_ACTION.PAUSE_GAME
  ) {
    return null;
  }
  return (
    <>
      {joinedPlayer.length > 0 ? (
        <StyledJoinedPlayerList>
          {joinedPlayer.map(({ id, name, avatar, isAdmin }) => (
            <PlayerPreview
              key={id}
              id={id}
              name={name}
              avatar={avatar}
              isAdmin={isAdmin}
            />
          ))}
        </StyledJoinedPlayerList>
      ) : (
        <Loader loadingText="Waiting for players to join..." />
      )}
    </>
  );
}

export default JoinedPlayerList;
