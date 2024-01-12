import { useEffect, useState } from "react";
import { useAdminSocket } from "../../../Context/adminSocketProvider";

import {
  ADMIN_GAME_ACTION,
  PLAYER_ACTION,
  PlayerDataType,
} from "../../../type";
import { ADMIN_GAME_ACTION_DATA } from "../constants";

export const useGetLatestPlayer = () => {
  const adminSocket = useAdminSocket();
  const [joinedPlayers, setJoinedPlayers] = useState<PlayerDataType[] | []>([]);

  useEffect(() => {
    if (adminSocket) {
      adminSocket.onmessage = (event) => {
        const { action, payload } = JSON.parse(event.data);

        if (action === PLAYER_ACTION.playerOnboarded) {
          setJoinedPlayers([...joinedPlayers, payload]);
        }
        if (action === PLAYER_ACTION.bulkPlayerOnboarded) {
          setJoinedPlayers(payload);
        }
      };
    }
  }, [adminSocket, joinedPlayers]);

  return joinedPlayers;
};

export const useAdminGameAction = ({
  adminGameAction,
}: {
  adminGameAction: ADMIN_GAME_ACTION;
}) => {
  const adminSocket = useAdminSocket();

  useEffect(() => {
    if (adminSocket) {
      switch (adminGameAction) {
        case ADMIN_GAME_ACTION.startGame:
          adminSocket.send(
            JSON.stringify(ADMIN_GAME_ACTION_DATA[adminGameAction])
          );
      }
    }
  }, [adminGameAction, adminSocket]);
};
