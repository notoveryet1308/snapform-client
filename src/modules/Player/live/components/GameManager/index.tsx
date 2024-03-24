import React from "react";
import { usePlayerGameManager } from "../../../hooks";

import { StyledPlayerGameManagerWrapper } from "./style";
import { ALL_QUESTION_VIEW_TYPE_CONFIG } from "../../../../../components/QuestionType";
import Loader from "../../../../../components/UI/Loader";
import { PlayerDataType } from "../../../../../type";

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
    handleOptionSelection,
    selectedOption,
  } = usePlayerGameManager();

  return (
    <StyledPlayerGameManagerWrapper>
      {!currentQuestion ? (
        <Loader />
      ) : (
        <div className="quiz-content">
          {ALL_QUESTION_VIEW_TYPE_CONFIG[currentQuestion.questionType]({
            ...currentQuestion,
            getSelectedOption: handleOptionSelection,
            onTimeOver: () => {
              sendPlayerResponse({
                selectedOption: selectedOption,
                player: playerDetail,
                questionId: currentQuestion.id,
                point: currentQuestion.point,
                quizId,
                responseTime: 1,
              });
            },
          })}
        </div>
      )}
    </StyledPlayerGameManagerWrapper>
  );
}

export default GameManager;
