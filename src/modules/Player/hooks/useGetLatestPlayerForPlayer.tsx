import { useState, useEffect } from "react";

import { useLivePlayerSocket } from "../../../Context/livePlayerSocketProvider";
import { useReadSocketMessage } from "../../../hooks";

import { PLAYER_ACTION, PlayerDataType, QUIZ_DATA_ACTION } from "../../../type";

export const useGetLatestPlayerForPlayer = () => {
  const socket = useLivePlayerSocket();
  const [joinedPlayers, setJoinedPlayers] = useState<PlayerDataType[]>([]);
  const serverMessage = useReadSocketMessage<PlayerDataType | PlayerDataType[]>(
    { ws: socket }
  );

  useEffect(() => {
    if (serverMessage && socket) {
      const { action, payload } = serverMessage;

      if (action === QUIZ_DATA_ACTION.JOINED_PLAYER) {
        setJoinedPlayers(payload as PlayerDataType[]);
      }

      if (
        action === PLAYER_ACTION.PLAYER_DISCONNECTED &&
        !Array.isArray(payload) &&
        payload?.id
      ) {
        const updatedPlayer =
          joinedPlayers.length &&
          joinedPlayers.filter((player) => player.id !== payload.id);
        setJoinedPlayers(updatedPlayer);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverMessage, socket]);

  return joinedPlayers;
};
