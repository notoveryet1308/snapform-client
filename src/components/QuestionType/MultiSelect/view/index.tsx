import { useState } from "react";
import {
  QuestionOptionType,
  QuizQuestionViewType,
  OptionResponseDataType,
} from "../../../../type";
import { ChoiceButton } from "../../../UI/ChoiceButton";
import ProgressTimeBar from "../../../UI/ProgressTimeBar";
import QuizQuestionContent from "../../QuizQuestionContent";
import { StyledMultiSelectViewWrapper } from "./style";

const MultiSelectView = ({
  title,
  description,
  options,
  timeLimit,
  getSelectedOption,
}: QuizQuestionViewType) => {
  const [selectedOptions, setSelectedOption] = useState<
    OptionResponseDataType[]
  >([]);

  const handleOptionSelection = ({
    choiceData,
    isSelected,
  }: {
    choiceData: QuestionOptionType;
    isSelected: boolean;
  }) => {
    const found = selectedOptions.find((op) => op.order === choiceData.order);
    const currentSelectedOption = found
      ? selectedOptions.filter((op) => op.order !== choiceData.order)
      : [...selectedOptions, { ...choiceData, isSelected }];

    setSelectedOption(() => currentSelectedOption);
    getSelectedOption(currentSelectedOption);
  };

  return (
    <StyledMultiSelectViewWrapper>
      <QuizQuestionContent
        title={title}
        description={description}
        questionType="Multi - select"
      />
      <div className="multi-select-view-options">
        <ProgressTimeBar time={timeLimit} />
        <div className="multi-option-wrapper">
          {options.map((option) => (
            <ChoiceButton
              key={option.order}
              label={option.label}
              order={option.order}
              isCorrectChoice={option.isCorrectChoice}
              onChoiceClick={handleOptionSelection}
              className="multi-option-btn"
            />
          ))}
        </div>
      </div>
    </StyledMultiSelectViewWrapper>
  );
};

export default MultiSelectView;
