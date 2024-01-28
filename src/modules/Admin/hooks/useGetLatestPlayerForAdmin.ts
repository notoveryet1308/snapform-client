import { useAdminSocket } from "../../../Context/adminSocketProvider";

import { useGetLatestPlayer } from "../../../hooks";

export const useGetLatestPlayerForAdmin = () => {
  const adminSocket = useAdminSocket();
  const joinedPlayers = useGetLatestPlayer({ socket: adminSocket });
  return joinedPlayers;
};
