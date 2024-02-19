/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useEffect, useState } from "react";

import { StyledDropdownWrapper } from "./style";

import { DropdownPropsType } from "./types";
import DropdownTrigger from "./DropdownTrigger";
import DropdownOption from "./DropdownOption";

const generateDropdownLabel = ({
  selectedValue,
  placeholder,
  showLabelAndValue,
  options,
}: {
  selectedValue: string;
  placeholder: string;
  showLabelAndValue: boolean;
  options: DropdownOptionType[];
}) => {
  const currLabel: TriggerLabelType = {
    label: placeholder,
    selectedValue: "",
  };
  if (selectedValue) {
    const selectedContent = options.filter((op) => op.key === selectedValue)[0]
      .content;
    currLabel.label = !showLabelAndValue ? "" : placeholder;
    currLabel.selectedValue = selectedContent;
  }

  return currLabel;
};

function Dropdown({
  trigger,
  placeholder,
  triggerType,
  options,
  optionNode,
  showLabelAndValue = false,
  value = "",
  classNames,
  label,
  onSelect = () => {},
}: DropdownPropsType) {
  const [selectedValue, setSelectedValue] = useState<string>(value);
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const handleSelectionValue = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    toggleOpen();
  };

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <StyledDropdownWrapper className={classNames?.wrapper}>
      {!!label && <div className="dropdown-name-wrapper">{label}</div>}
      <div
        className={`dropdown-trigger-wrapper ${classNames?.triggerWrapper}`}
        onClick={toggleOpen}
      >
        {trigger || (
          <DropdownTrigger
            placeholder={generateDropdownLabel({
              selectedValue,
              showLabelAndValue,
              placeholder,
              options,
            })}
            triggerType={triggerType}
            isOpen={isOpen}
            isValueSelected={!!selectedValue}
          />
        )}
      </div>
      {isOpen && (
        <div
          className={`dropdown-content-wrapper ${classNames?.contentWrapper}`}
        >
          {options.map((option) => (
            <div
              key={option.key}
              onClick={() => handleSelectionValue(option.key)}
              className="option-wrapper"
            >
              {optionNode || <DropdownOption option={option.content} />}
            </div>
          ))}
        </div>
      )}
    </StyledDropdownWrapper>
  );
}

export default Dropdown;
