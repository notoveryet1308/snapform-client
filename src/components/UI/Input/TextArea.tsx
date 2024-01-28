import React from "react";

import { StyledTextAreaWrapper, StyledTextArea } from "./style";
import { useCheckCharacterLimit } from "./hooks";
import { TextAreaProps } from "./type";

function TextArea({
  maxCharLimit,
  value = "",
  onInputChange,
  name,
  placeholder,
  height,
  isResizable,
}: TextAreaProps) {
  const { handleInputChange, inputValue, remainingCharCount } =
    useCheckCharacterLimit({
      charCount: maxCharLimit,
      value: value,
      onInputChange,
    });
  return (
    <StyledTextAreaWrapper height={height} isResizable={isResizable}>
      <StyledTextArea
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        isResizable={isResizable}
      />
      {!!maxCharLimit && (
        <span className={`input-char-limit ${!remainingCharCount && "over"}`}>
          {remainingCharCount}
        </span>
      )}
    </StyledTextAreaWrapper>
  );
}

export default TextArea;
