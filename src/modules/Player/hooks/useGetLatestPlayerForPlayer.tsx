import { useLivePlayerSocket } from "../../../Context/livePlayerSocketProvider";
import { useGetLatestPlayer } from "../../../hooks";

export const useGetLatestPlayerForPlayer = () => {
  const socket = useLivePlayerSocket();
  const joinedPlayers = useGetLatestPlayer({ socket });

  return joinedPlayers;
};
