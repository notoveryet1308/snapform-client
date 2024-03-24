import { useState, useEffect, useCallback } from "react";
import {
  messageFormat,
  PlayerDataType,
  PLAYER_ACTION,
  ADMIN_ACTION,
  PlayerQuizQuestionResponseDataType,
} from "../type";

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

      if (action === ADMIN_ACTION.ADMIN_PLAYER_ONBOARDED) {
        if (!joinedPlayers.length) {
          setJoinedPlayers([payload as PlayerDataType]);
        } else {
          setJoinedPlayers([...joinedPlayers, payload as PlayerDataType]);
        }
      }

      if (
        action === ADMIN_ACTION.PLAYER_BULK_ONBOARDING_TO_ADMIN &&
        Array.isArray(payload) &&
        (payload as PlayerDataType[])
      ) {
        setJoinedPlayers(payload);
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
  }, [serverMessage?.action, socket]);

  return joinedPlayers;
};

export const useAdminOnboarded = ({ socket }: { socket: WebSocket | null }) => {
  const [isAdminOnboarded, setAdminOnboarded] = useState(false);
  const serverMessage = useReadSocketMessage<PlayerDataType | PlayerDataType[]>(
    { ws: socket }
  );

  useEffect(() => {
    console.log({ action: serverMessage?.action });

    if (serverMessage) {
      if (serverMessage.action === ADMIN_ACTION.ADMIN_ONBOARDED) {
        setAdminOnboarded(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverMessage?.action]);

  return { isAdminOnboarded };
};

export const useLiveQuizActivityData = ({
  socket,
  sendResponseAction,
}: {
  sendResponseAction: string;
  socket: WebSocket | null;
}) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const socketMessage = useReadSocketMessage({ ws: socket });

  const handleOptionSelection = useCallback((value) => {
    setSelectedOption(value);
  }, []);

  const sendPlayerResponse = ({
    player,
    point,
    questionId,
    quizId,
    selectedOption,
    responseTime,
  }: PlayerQuizQuestionResponseDataType) => {
    if (socket) {
      const message = {
        action: sendResponseAction,
        payload: {
          player,
          point,
          questionId,
          quizId,
          selectedOption,
          responseTime,
        },
      };

      socket.send(JSON.stringify(message));
      console.log({ message });
    }
  };

  return { sendPlayerResponse, handleOptionSelection, selectedOption };
};
