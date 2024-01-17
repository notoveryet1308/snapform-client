import { StyledGameHeaderWrapper } from "./style";

import React, { ReactNode } from "react";

type GameHeaderProps = {
  gameName: string;
  children?: ReactNode;
};

function GameHeader({ gameName, children }: GameHeaderProps) {
  return (
    <StyledGameHeaderWrapper>
      <p className="game-name">{gameName}</p>
      <div className="children-wrapper">{children}</div>
    </StyledGameHeaderWrapper>
  );
}

export default GameHeader;
