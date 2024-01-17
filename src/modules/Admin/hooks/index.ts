import { useEffect, useState } from "react";
import { useAdminSocket } from "../../../Context/adminSocketProvider";

import {
  ADMIN_GAME_ACTION,
  PLAYER_ACTION,
  PlayerDataType,
  AdminGameControlType,
} from "../../../type";
import { ADMIN_GAME_ACTION_DATA } from "../constants";
import { useReadSocketMessage } from "../../../hooks";

type SEND_ADMIN_GAME_ACTION =
  | ADMIN_GAME_ACTION.PLAY_GAME
  | ADMIN_GAME_ACTION.PAUSE_GAME
  | ADMIN_GAME_ACTION.SKIP_QUESTION;

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

export const useAdminGameAction = () => {
  const adminSocket = useAdminSocket();
  const [adminGameControl, setAdminGameControl] =
    useState<AdminGameControlType | null>(null);
  const serverMessage = useReadSocketMessage<string>({ ws: adminSocket });

  const onSendAdminGameAction = ({
    adminGameAction,
  }: {
    adminGameAction: SEND_ADMIN_GAME_ACTION;
  }) => {
    if (adminSocket) {
      adminSocket.send(JSON.stringify(ADMIN_GAME_ACTION_DATA[adminGameAction]));
    }
  };

  const onGamePlayPauseAction = () => {
    if (!adminGameControl?.[ADMIN_GAME_ACTION.PLAY_PAUSE]) {
      onSendAdminGameAction({ adminGameAction: ADMIN_GAME_ACTION.PLAY_GAME });
    }
    if (
      adminGameControl?.[ADMIN_GAME_ACTION.PLAY_PAUSE] ===
      ADMIN_GAME_ACTION.PLAY_GAME
    ) {
      onSendAdminGameAction({ adminGameAction: ADMIN_GAME_ACTION.PAUSE_GAME });
    }
    if (
      adminGameControl?.[ADMIN_GAME_ACTION.PLAY_PAUSE] ===
      ADMIN_GAME_ACTION.PAUSE_GAME
    ) {
      onSendAdminGameAction({ adminGameAction: ADMIN_GAME_ACTION.PLAY_GAME });
    }
  };

  const onGameSkipQuestionAction = () => {
    onSendAdminGameAction({ adminGameAction: ADMIN_GAME_ACTION.SKIP_QUESTION });
  };

  useEffect(() => {
    if (serverMessage) {
      const { action, payload } = serverMessage;

      if (action === ADMIN_GAME_ACTION.PLAY_GAME) {
        setAdminGameControl((prevControl) => ({
          ...(prevControl || { PAUSE_GAME: null, SKIP_QUESTION: null }),
          PLAY_PAUSE: ADMIN_GAME_ACTION[payload as "PLAY_GAME"],
        }));
      }
      if (action === ADMIN_GAME_ACTION.PAUSE_GAME) {
        setAdminGameControl((prevControl) => ({
          ...(prevControl || { SKIP_QUESTION: null }),
          PLAY_PAUSE: ADMIN_GAME_ACTION[payload as "PAUSE_GAME"],
        }));
      }
      if (action === ADMIN_GAME_ACTION.SKIP_QUESTION) {
        setAdminGameControl((prevControl) => ({
          ...(prevControl || { PLAY_PAUSE: null }),
          SKIP_QUESTION: ADMIN_GAME_ACTION[payload as "SKIP_QUESTION"],
        }));
      }
    }
  }, [serverMessage]);

  return {
    onGamePlayPauseAction,
    onGameSkipQuestionAction,
    adminGameControl,
  };
};
