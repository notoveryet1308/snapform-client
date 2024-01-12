import React, { createContext, useContext, useEffect, useState } from "react";
import { connectToServer } from "../apiUtils";
import { ADMIN_ACTION } from "../type";

// Define the context
interface AdminSocketContextProps {
  adminSocket: null | WebSocket;
}

const AdminSocketContext = createContext<AdminSocketContextProps | undefined>(
  undefined
);

export const AdminSocketProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [adminSocket, setAdminSocket] = useState<null | WebSocket>(null);

  useEffect(() => {
    connectToServer({ path: "admin" }).then((ws) => {
      const socket = ws as WebSocket;
      setAdminSocket(socket);
      socket.send(
        JSON.stringify({
          action: ADMIN_ACTION.adminOnboarding,
          payload: "ok",
        })
      );
    });
    // const ws = new WebSocket(`ws://localhost:3000/admin`);
  }, []);

  return (
    <AdminSocketContext.Provider value={{ adminSocket }}>
      {children}
    </AdminSocketContext.Provider>
  );
};

// Define a custom hook to consume the context
export const useAdminSocket = () => {
  const context = useContext(AdminSocketContext);

  if (!context) {
    throw new Error(
      "useAdminSocket must be used within an AdminSocketProvider"
    );
  }

  return context.adminSocket;
};
