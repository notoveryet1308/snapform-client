import { useState, useEffect } from "react";
import { messageFormat } from "../type";

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
