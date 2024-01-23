import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import {
  PLAYER_ACTION,
  PlayerDataType,
  AdminGameControlType,
  ADMIN_GAME_ACTION,
  GAME_COUNT_DOWN,
} from "../../../type";
import { useLivePlayerSocket } from "../../../Context/livePlayerSocketProvider";
import { useReadSocketMessage } from "../../../hooks";

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

export const useListenAdminGameAction = () => {
  const playerSocket = useLivePlayerSocket();
  const [adminGameAction, setAdminGameAction] =
    useState<AdminGameControlType | null>(null);

  const serverMessage = useReadSocketMessage({ ws: playerSocket });

  useEffect(() => {
    if (serverMessage) {
      const { action, payload } = serverMessage;

      if (action === ADMIN_GAME_ACTION.PLAY_GAME) {
        setAdminGameAction((prevControl) => ({
          ...(prevControl || { SKIP_QUESTION: null }),
          PLAY_PAUSE: ADMIN_GAME_ACTION[payload as "PLAY_GAME"],
        }));
      }
      if (action === ADMIN_GAME_ACTION.PAUSE_GAME) {
        setAdminGameAction((prevControl) => ({
          ...(prevControl || { SKIP_QUESTION: null }),
          PLAY_PAUSE: ADMIN_GAME_ACTION[payload as "PAUSE_GAME"],
        }));
      }
      if (action === ADMIN_GAME_ACTION.SKIP_QUESTION) {
        setAdminGameAction((prevControl) => ({
          ...(prevControl || { PLAY_PAUSE: null }),
          SKIP_QUESTION: ADMIN_GAME_ACTION[payload as "SKIP_QUESTION"],
        }));
      }
    }
  }, [serverMessage]);

  return adminGameAction;
};

export const useGamePlayerCountDown = () => {
  const socket = useLivePlayerSocket();
  const [countDownNumber, setCountDownNumber] = useState<number>();

  const serverMessage = useReadSocketMessage<number>({ ws: socket });

  useEffect(() => {
    if (serverMessage && socket) {
      const { action, payload } = serverMessage;

      if (action === GAME_COUNT_DOWN.IN_PROGRESS) {
        setCountDownNumber(() => payload);
      }
    }
  }, [serverMessage, socket]);

  return { countDownNumber };
};
