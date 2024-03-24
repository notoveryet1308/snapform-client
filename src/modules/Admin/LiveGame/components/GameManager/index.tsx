import { ALL_QUESTION_VIEW_TYPE_CONFIG } from "../../../../../components/QuestionType";
import Loader from "../../../../../components/UI/Loader";
import { PlayerDataType } from "../../../../../type";
import { useAdminGameManager } from "../../../hooks/useGamePlay";
import { StyledGameManagerWrapper } from "./style";

function GameManager({
  playerDetail,
  quizId,
}: {
  playerDetail: PlayerDataType;
  quizId: string;
}) {
  const {
    currentQuestion,
    sendPlayerResponse,
    selectedOption,
    handleOptionSelection,
  } = useAdminGameManager();

  return (
    <StyledGameManagerWrapper>
      {!currentQuestion ? (
        <Loader />
      ) : (
        <div className="quiz-content">
          {ALL_QUESTION_VIEW_TYPE_CONFIG[currentQuestion.questionType]({
            ...currentQuestion,
            getSelectedOption: (value) => {
              console.log({ value });
              handleOptionSelection(value);
            },
            onTimeOver: () => {
              sendPlayerResponse({
                selectedOption: selectedOption,
                questionId: currentQuestion.id,
                point: currentQuestion.point,
                quizId,
                responseTime: 0,
                player: playerDetail,
              });
            },
          })}
        </div>
      )}
    </StyledGameManagerWrapper>
  );
}

export default GameManager;
