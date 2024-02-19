import { CaretDown, CaretUp, ArrowRight } from "@phosphor-icons/react";

import { StyledDropdownTriggerWrapper } from "./style";
import { DropdownTriggerPropsType } from "./types";

const DropdownTrigger = ({
  placeholder,
  isOpen,
  triggerType = "border",
  isValueSelected,
}: DropdownTriggerPropsType) => {
  return (
    <StyledDropdownTriggerWrapper
      className={`${triggerType}-type ${
        isValueSelected ? "selected-value" : ""
      }`}
    >
      <div className="trigger-label-wrapper">
        <span className="trigger-label">{placeholder.label}</span>
        {placeholder.label && placeholder.selectedValue ? (
          <ArrowRight className="arrow-separator" />
        ) : (
          ""
        )}
        {placeholder.selectedValue ? placeholder.selectedValue : ""}
      </div>
      {isOpen ? (
        <CaretUp className="trigger-icon" />
      ) : (
        <CaretDown className="trigger-icon" />
      )}
    </StyledDropdownTriggerWrapper>
  );
};

export default DropdownTrigger;
