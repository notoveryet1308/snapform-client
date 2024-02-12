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
};

function ChoiceButtonCombo({
  choiceData,
  getOptionDetail,
}: ChoiceButtonComboProp) {
  return (
    <StyledChoiceButtonComboWrapper>
      {choiceData.map((choice, index) => (
        <ChoiceButtonEdit
          key={index}
          choiceOrder={choice.order}
          placeholder={choice.placeholder}
          getOptionDetail={getOptionDetail}
        />
      ))}
    </StyledChoiceButtonComboWrapper>
  );
}

export default memo(ChoiceButtonCombo);
