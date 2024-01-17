import React, { ChangeEvent, useState } from "react";
import { StyledInput, StyledInputWrapper } from "./style";
import { InputProps } from "./type";

function Input({
  name,
  type,
  value = "",
  onInputChange,
  placeholder,
}: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    onInputChange(value);
  };
  return (
    <StyledInputWrapper>
      <StyledInput
        name={name}
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </StyledInputWrapper>
  );
}

export default Input;
