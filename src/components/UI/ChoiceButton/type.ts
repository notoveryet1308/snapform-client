import { ReactNode } from "react";

import { QuestionOptionType } from "../.../../../../type";

export type ChoiceButtonEditProp = {
  placeholder: string;
  getOptionDetail: (value: QuestionOptionType) => void;
  choiceOrder?: string;
  className?: string;
  hideChoiceOrder?: boolean;
  disableCheckbox?: boolean;
  selectedValues?: QuestionOptionType;
};

export interface ChoiceButtonBaseProps {
  isEdit?: boolean;
  choiceOrder?: string;
  children?: ReactNode;
  isPreviewMode?: boolean;
  onClick: () => void;
  isSelected?: boolean;
  isSelectionDisabled?: boolean;
  className?: string;
  hideChoiceOrder?: boolean;
}

export interface ChoiceButtonProps {
  order: string;
  label: string;
  className?: string;
  onChoiceClick: ({
    choiceData,
    isSelected,
  }: {
    choiceData: QuestionOptionType;
    isSelected: boolean;
  }) => void;
  isCorrectChoice: boolean;
  isSelectionDisabled?: boolean;
  selected?: boolean;
}
