import { useState, useEffect } from "react";
import { messageFormat, PlayerDataType, PLAYER_ACTION } from "../type";

export const useReadSocketMessage = <T>({
  ws,
}: {
  ws: WebSocket | null;
}): messageFormat<T> | null => {
  const [serverMessage, setServerMessage] = useState<messageFormat<T> | null>(
    null
  );

  useEffect(() => {
    const handleOnMessage = (event: MessageEvent) => {
      const { action, payload } = JSON.parse(event.data);
      setServerMessage({ action, payload });
    };

    if (ws) {
      ws.addEventListener("message", handleOnMessage);

      return () => {
        ws.removeEventListener("message", handleOnMessage);
      };
    }
  }, [ws]);

  return serverMessage;
};

export const useGetLatestPlayer = ({
  socket,
}: {
  socket: WebSocket | null;
}) => {
  const [joinedPlayers, setJoinedPlayers] = useState<PlayerDataType[]>([]);
  const serverMessage = useReadSocketMessage<PlayerDataType | PlayerDataType[]>(
    { ws: socket }
  );

  useEffect(() => {
    if (serverMessage && socket) {
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
  }, [serverMessage, socket]);

  return joinedPlayers;
};
