import Loader from "../../../../../components/UI/Loader";
import { useAdminGameManager } from "../../../hooks/useGamePlay";
import { StyledGameManagerWrapper } from "./style";

function GameManager() {
  const { currentQuestion } = useAdminGameManager();

  return (
    <StyledGameManagerWrapper>
      {!currentQuestion ? <Loader /> : "question"}
    </StyledGameManagerWrapper>
  );
}

export default GameManager;
