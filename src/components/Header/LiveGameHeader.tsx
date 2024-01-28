import React from "react";

import { StyledLiveGameHeaderWrapper } from "./style";
import { PlayerDataType } from "../../type";
import Logo from "../UI/Logo";

type LiveGameHeaderProps = {
  gameName: string;
  isLive: boolean;
  livePlayerCount?: number;
  playerDetail: PlayerDataType | null;
};

function LiveGameHeader({
  gameName,
  isLive,
  livePlayerCount,
  playerDetail,
}: LiveGameHeaderProps) {
  return (
    <StyledLiveGameHeaderWrapper>
      <Logo />
      <div className="game-name">{gameName}</div>
      <div className="header-right">
        {playerDetail ? (
          <div className="player-detail">
            <img
              src={playerDetail.avatar}
              className="player-avatar"
              alt="player-avatar"
            />
            <p className="player-name">{playerDetail.name}</p>
          </div>
        ) : null}
        {isLive ? (
          <div className="live-game-detail">
            {livePlayerCount ? (
              <p className="live-player-count">{livePlayerCount} player</p>
            ) : null}
            <div className="live-status">Live</div>
          </div>
        ) : null}
      </div>
    </StyledLiveGameHeaderWrapper>
  );
}

export default LiveGameHeader;
