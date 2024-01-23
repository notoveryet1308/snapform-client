import { useEffect, useState } from "react";
import { useAdminSocket } from "../../../Context/adminSocketProvider";

import { PLAYER_ACTION, PlayerDataType } from "../../../type";

import { useReadSocketMessage } from "../../../hooks";

export const useGetLatestPlayer = () => {
  const adminSocket = useAdminSocket();
  const [joinedPlayers, setJoinedPlayers] = useState<PlayerDataType[]>([]);
  const serverMessage = useReadSocketMessage<PlayerDataType | PlayerDataType[]>(
    { ws: adminSocket }
  );

  useEffect(() => {
    if (serverMessage && adminSocket) {
      const { action, payload } = serverMessage;

      if (action === PLAYER_ACTION.playerOnboarded) {
        setJoinedPlayers((prevPlayers) => [
          ...prevPlayers,
          payload as PlayerDataType,
        ]);
      }

      if (action === PLAYER_ACTION.bulkPlayerOnboarded) {
        if (Array.isArray(payload)) {
          setJoinedPlayers(payload as PlayerDataType[]);
        }
      }
    }
  }, [serverMessage, adminSocket]);

  return joinedPlayers;
};
