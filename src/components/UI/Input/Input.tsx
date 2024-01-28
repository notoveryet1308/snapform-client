import { StyledInput, StyledInputWrapper } from "./style";
import { InputProp } from "./type";
import { useCheckCharacterLimit } from "./hooks";

function Input({
  name,
  type,
  value = "",
  onInputChange,
  placeholder,
  maxCharLimit,
}: InputProp) {
  const { remainingCharCount, inputValue, handleInputChange } =
    useCheckCharacterLimit({
      charCount: maxCharLimit,
      value,
      onInputChange,
    });

  return (
    <>
      <StyledInputWrapper>
        <StyledInput
          name={name}
          type={type}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        {!!maxCharLimit && (
          <span className={`input-char-limit ${!remainingCharCount && "over"}`}>
            {remainingCharCount}
          </span>
        )}
      </StyledInputWrapper>
    </>
  );
}

export default Input;
