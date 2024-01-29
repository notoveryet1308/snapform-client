import { ReactNode } from "react";

import { QuestionOptionType } from "../.../../../../type";

export type ChoiceButtonEditProp = {
  placeholder: string;
  getOptionDetail: (value: QuestionOptionType) => void;
  choiceOrder?: string;
};

export interface ChoiceButtonBaseProps {
  isEdit?: boolean;
  choiceOrder?: string;
  children?: ReactNode;
  isPreviewMode?: boolean;
  onClick: () => void;
  isSelected?: boolean;
  isSelectionDisabled?: boolean;
}

export interface ChoiceButtonProps {
  order: string;
  label: string;
  onChoiceClick: ({
    choiceData,
    isSelected,
  }: {
    choiceData: QuestionOptionType;
    isSelected: boolean;
  }) => void;
  isCorrectChoice: boolean;
  isSelectionDisabled?: boolean;
}
