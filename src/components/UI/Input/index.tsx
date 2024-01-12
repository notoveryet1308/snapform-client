import React, { ChangeEvent, useState } from "react";
import { StyledInputWrapper } from "./style";
import { InputProps } from "./type";

function Input({ name, type, value = "", onInputChange }: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    onInputChange(value)
  };
  return (
    <StyledInputWrapper>
      <input
        name={name}
        type={type}
        value={inputValue}
        onChange={handleInputChange}
      />
    </StyledInputWrapper>
  );
}

export default Input;
