import React, { createContext, useContext, useEffect, useState } from "react";
import { connectToServer } from "../apiUtils";

// Define the context
interface LivePlayerSocketContextProps {
  livePlayerSocket: null | WebSocket;
}

const LivePlayerContext = createContext<
  LivePlayerSocketContextProps | undefined
>(undefined);

export const LivePlayerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [livePlayerSocket, setLivePlayerSocket] = useState<null | WebSocket>(
    null
  );

  useEffect(() => {
    if (!livePlayerSocket) {
      connectToServer({ path: "live-player" }).then((ws) => {
        console.log(ws);
        
        setLivePlayerSocket(ws as WebSocket);
      });
    }
  }, [livePlayerSocket]);

  return (
    <LivePlayerContext.Provider value={{ livePlayerSocket }}>
      {children}
    </LivePlayerContext.Provider>
  );
};

// Define a custom hook to consume the context
export const useLivePlayerSocket = () => {
  const context = useContext(LivePlayerContext);

  if (!context) {
    throw new Error(
      "useLivePlayerSocket must be used within an LivePlayerSocketProvider"
    );
  }

  return context.livePlayerSocket;
};
