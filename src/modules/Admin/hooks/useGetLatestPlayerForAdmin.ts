import { useAdminSocket } from "../../../Context/adminSocketProvider";

import { useAdminOnboarded, useGetLatestPlayer } from "../../../hooks";

export const useGetLatestPlayerForAdmin = () => {
  const adminSocket = useAdminSocket();
  const joinedPlayers = useGetLatestPlayer({ socket: adminSocket });
  const { isAdminOnboarded } = useAdminOnboarded({ socket: adminSocket });

  return { joinedPlayers, isAdminOnboarded };
};
