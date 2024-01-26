import React from "react";
import { usePlayerGameManager } from "../../../hooks";

function GameManager() {
  const { currentQuestion } = usePlayerGameManager();

  return <>GameManager</>;
}

export default GameManager;
