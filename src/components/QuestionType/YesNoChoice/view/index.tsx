import { useState } from "react";
import {
  QuestionOptionType,
  SingleSelectQuizQuestionViewType,
  OptionResponseDataType,
} from "../../../../type";
import { ChoiceButton } from "../../../UI/ChoiceButton";
import ProgressTimeBar from "../../../UI/ProgressTimeBar";
import QuizQuestionContent from "../../QuizQuestionContent";
import { StyledYesNoSelectViewWrapper } from "./style";

const YesNoSelectView = ({
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
    <StyledYesNoSelectViewWrapper>
      <QuizQuestionContent
        title={title}
        description={description}
        questionType="yes/no - select"
      />
      <div className="yes-no-select-view-options">
        <ProgressTimeBar time={timeLimit} />
        <div className="yes-no-option-wrapper">
          {options.map((option) => (
            <ChoiceButton
              key={option.order}
              label={option.label}
              order={option.order}
              isCorrectChoice={option.isCorrectChoice}
              onChoiceClick={handleOptionSelection}
              className="yes-no-option-btn"
              selected={
                selectedOption ? selectedOption.order === option.order : false
              }
            />
          ))}
        </div>
      </div>
    </StyledYesNoSelectViewWrapper>
  );
};

export default YesNoSelectView;
