import { memo } from "react";
import { QuestionOptionType } from "../../../type";
import { ChoiceButtonEdit } from "../../UI/ChoiceButton";

import { StyledChoiceButtonComboWrapper } from "./style";

type ChoiceButtonDataType = {
  order: string;
  placeholder: string;
};

type ChoiceButtonComboProp = {
  choiceData: ChoiceButtonDataType[];
  getOptionDetail: (value: QuestionOptionType) => void;
  options: QuestionOptionType[];
};

const getSelectedOptionDetail = ({
  options = [],
  order,
}: {
  options: QuestionOptionType[];
  order: string;
}) => {
  let selectedOptionData: QuestionOptionType = {
    label: "",
    isCorrectChoice: false,
    order: order,
  };
  if (options.length && options.some((op) => op.order === order)) {
    selectedOptionData = options.find((op) => op.order === order);
  }

  return selectedOptionData;
};

function ChoiceButtonCombo({
  choiceData,
  getOptionDetail,
  options,
}: ChoiceButtonComboProp) {
  return (
    <StyledChoiceButtonComboWrapper>
      {choiceData.map((choice, index) => (
        <ChoiceButtonEdit
          key={index}
          choiceOrder={choice.order}
          placeholder={choice.placeholder}
          getOptionDetail={getOptionDetail}
          selectedValues={getSelectedOptionDetail({
            order: choice.order,
            options,
          })}
        />
      ))}
    </StyledChoiceButtonComboWrapper>
  );
}

export default memo(ChoiceButtonCombo);
