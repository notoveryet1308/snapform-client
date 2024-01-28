import { useState, ChangeEvent, useCallback } from "react";

export const useCheckCharacterLimit = ({
  charCount = 4000,
  value,
  onInputChange,
}: {
  charCount?: number;
  value: string;
  onInputChange: (value: string) => void;
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [remainingCharCount, setRemainingCharCount] = useState(charCount);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { value } = event.target;

      if (value.length <= charCount) {
        setInputValue(() => value);
        onInputChange(value);
        setRemainingCharCount(() => remainingCharCount - value.length);
      }
    },
    []
  );

  return {
    remainingCharCount,
    handleInputChange,
    inputValue,
  };
};
