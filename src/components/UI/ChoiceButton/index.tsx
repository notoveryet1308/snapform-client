import { useCallback, useEffect, useState } from "react";

import { CheckButton } from "../Button";
import { useChoiceBtnInput } from "./hooks";
import {
  StyledChoiceButtonBase,
  StyledChoiceButtonEditWrapper,
  StyledChoiceButtonWrapper,
} from "./style";
import {
  ChoiceButtonEditProp,
  ChoiceButtonBaseProps,
  ChoiceButtonProps,
} from "./type";
import { noop } from "../../../apiUtils";

function ChoiceButtonBase({
  isEdit,
  choiceOrder,
  children,
  onClick,
  isPreviewMode,
  isSelected,
  isSelectionDisabled,
  hideChoiceOrder = false,
}: ChoiceButtonBaseProps) {
  return (
    <StyledChoiceButtonBase
      className={`choice-btn-base ${isEdit && "edit-mode"} ${
        isPreviewMode && "preview-mode"
      } ${isSelected && "choice-selected"} ${
        isSelectionDisabled && "choice-selection-disabled"
      }`}
      onClick={onClick}
    >
      <div className="choice-btn-content">
        {!hideChoiceOrder && (
          <div className="choice-btn-number">{choiceOrder}</div>
        )}
        {children}
      </div>
      <div className="choice-btn-overlay" />
    </StyledChoiceButtonBase>
  );
}

function ChoiceButtonEdit({
  choiceOrder,
  placeholder = "Add your answer",
  getOptionDetail,
  className,
  hideChoiceOrder = false,
  disableCheckbox,
}: ChoiceButtonEditProp) {
  const {
    handleChangeInput,
    inputValue,
    handleCorrectOption,
    isCorrectOption,
    onInputBlurHandler,
  } = useChoiceBtnInput({
    getOptionDetail,
    choiceOrder,
  });
  return (
    <StyledChoiceButtonEditWrapper className={className}>
      <ChoiceButtonBase
        isEdit
        choiceOrder={choiceOrder}
        onClick={noop}
        hideChoiceOrder={hideChoiceOrder}
      >
        <input
          className="choice-btn-input"
          value={inputValue}
          onChange={handleChangeInput}
          placeholder={placeholder}
          onBlur={onInputBlurHandler}
        />
        <CheckButton
          getCheckedState={handleCorrectOption}
          shouldUncheck={isCorrectOption && !inputValue ? true : false}
          disable={!inputValue || !!disableCheckbox}
        />
      </ChoiceButtonBase>
    </StyledChoiceButtonEditWrapper>
  );
}

function ChoiceButton({
  order,
  label,
  isCorrectChoice,
  onChoiceClick,
  isSelectionDisabled,
  className,
}: ChoiceButtonProps) {
  const [isSelected, setSelected] = useState(false);
  const handleOnChoiceClick = useCallback(() => {
    setSelected(() => !isSelected);
  }, [isSelected]);

  useEffect(() => {
    onChoiceClick({
      choiceData: { order, label, isCorrectChoice },
      isSelected: isSelected,
    });
  }, [isCorrectChoice, isSelected, label, onChoiceClick, order]);

  return (
    <StyledChoiceButtonWrapper
      $isSelected={isSelected}
      $isSelectionDisabled={isSelectionDisabled}
      className={className}
    >
      <ChoiceButtonBase
        isPreviewMode
        choiceOrder={order}
        onClick={handleOnChoiceClick}
        isSelected={isSelected}
        isSelectionDisabled={isSelectionDisabled}
      >
        <p className="choice-label">{label}</p>
      </ChoiceButtonBase>
    </StyledChoiceButtonWrapper>
  );
}

export { ChoiceButtonEdit, ChoiceButton };
