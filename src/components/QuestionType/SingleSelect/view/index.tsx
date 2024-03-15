/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  QuestionOptionType,
  SingleSelectQuizQuestionViewType,
  OptionResponseDataType,
} from "../../../../type";
import { ChoiceButton } from "../../../UI/ChoiceButton";
import ProgressTimeBar from "../../../UI/ProgressTimeBar";
import QuizQuestionContent from "../../QuizQuestionContent";
import { StyledSingleSelectViewWrapper } from "./style";

const SingleSelectView = ({
  title,
  description,
  options,
  timeLimit,
  getSelectedOption,
}: SingleSelectQuizQuestionViewType) => {
  const [selectedOption, setSelectedOption] =
    useState<OptionResponseDataType | null>(null);

  const handleOptionSelection = ({
    choiceData,
    isSelected,
  }: {
    choiceData: QuestionOptionType;
    isSelected: boolean;
  }) => {
    setSelectedOption({ ...choiceData, isSelected });
    getSelectedOption({ ...choiceData, isSelected });
  };

  return (
    <StyledSingleSelectViewWrapper>
      <QuizQuestionContent
        title={title}
        description={description}
        questionType="Single - select"
      />
      <div className="single-select-view-options">
        <ProgressTimeBar time={timeLimit} />
        <div className="single-option-wrapper">
          {options.map((option) => (
            <ChoiceButton
              key={option.order}
              label={option.label}
              order={option.order}
              isCorrectChoice={option.isCorrectChoice}
              onChoiceClick={handleOptionSelection}
              className="single-option-btn"
              selected={
                selectedOption ? selectedOption.order === option.order : false
              }
            />
          ))}
        </div>
      </div>
    </StyledSingleSelectViewWrapper>
  );
};

export default SingleSelectView;
