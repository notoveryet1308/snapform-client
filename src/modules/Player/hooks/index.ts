import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import { PLAYER_ACTION, PlayerDataType } from "../../../type";
import { useLivePlayerSocket } from "../../../Context/livePlayerSocketProvider";

export const useOnboardPlayer = () => {
  const [playerDetails, setPlayerDetails] = useState<PlayerDataType | null>(
    null
  );
  const [isPlayerOnboarded, setIsPlayerOnboarded] = useState(false);

  const livePlayerSocket = useLivePlayerSocket();

  const handlePlayerDetail = ({ name }: { name: string }) => {
    if (name) {
      const playerId = nanoid();
      const avatarLink = `https://robohash.org/${playerId}`;
      setPlayerDetails({ id: playerId, avatar: avatarLink, name });
    }
  };

  const onPlayerJoining = () => {
    if (livePlayerSocket && playerDetails) {
      const message = {
        action: PLAYER_ACTION.playerOnboarding,
        payload: playerDetails,
      };
      livePlayerSocket.send(JSON.stringify(message));
    }
  };

  useEffect(() => {
    if (livePlayerSocket) {
      livePlayerSocket.onmessage = (event) => {
        const { action, payload } = JSON.parse(event.data);

        if (
          action === PLAYER_ACTION.playerOnboarded &&
          payload.id === playerDetails?.id
        ) {
          setIsPlayerOnboarded(true);
        }
      };
    }
  }, [livePlayerSocket, playerDetails?.id]);

  return {
    onPlayerJoining,
    handlePlayerDetail,
    playerDetails,
    isPlayerOnboarded,
  };
};
