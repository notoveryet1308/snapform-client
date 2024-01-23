import { Spinner } from "phosphor-react";

import { StyledJoinedPlayerList } from "./style";
import PlayerPreview from "../../../../../components/PlayerPreview";
import {
  ADMIN_GAME_ACTION,
  AdminGameControlType,
  PlayerDataType,
} from "../../../../../type";

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
    <StyledJoinedPlayerList>
      {joinedPlayer.length > 0 ? (
        joinedPlayer.map(({ id, name, avatar }) => (
          <PlayerPreview key={id} id={id} name={name} avatar={avatar} />
        ))
      ) : (
        <div className="waiting-wrapper">
          <Spinner className="spinner-icon" size={32} />
          <h3 className="waiting-text">Waiting for players to join...</h3>
        </div>
      )}
    </StyledJoinedPlayerList>
  );
}

export default JoinedPlayerList;
