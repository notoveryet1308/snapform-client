import { Outlet } from "react-router-dom";
import { StyledPlayerWrapper } from "./style";
import { LivePlayerProvider } from "../../Context/livePlayerSocketProvider";

const Player = () => {
  return (
    <LivePlayerProvider>
      <StyledPlayerWrapper>
        <Outlet />
      </StyledPlayerWrapper>
    </LivePlayerProvider>
  );
};

export default Player;
