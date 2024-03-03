import { useCallback, useState, ChangeEvent, useEffect } from "react";
import { QuestionOptionType } from "../../../type";

export const useChoiceBtnInput = ({
  getOptionDetail,
  choiceOrder = "",
  selectedValues,
}: {
  choiceOrder?: string;
  getOptionDetail: ({ label, isCorrectChoice }: QuestionOptionType) => void;
  selectedValues?: QuestionOptionType;
}) => {
  const [inputValue, setInputValue] = useState(selectedValues?.label || "");
  const [isCorrectOption, setCorrectOption] = useState(
    !!selectedValues?.isCorrectChoice
  );

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setInputValue(value);
    },
    []
  );

  const handleCorrectOption = useCallback(
    (state: boolean) => {
      setCorrectOption(state);
      getOptionDetail({
        order: choiceOrder,
        label: inputValue,
        isCorrectChoice: state,
      });
    },
    [choiceOrder, getOptionDetail, inputValue]
  );

  const onInputBlurHandler = () => {
    getOptionDetail({
      order: choiceOrder,
      label: inputValue,
      isCorrectChoice: isCorrectOption,
    });
  };

  useEffect(() => {
    if (!inputValue && isCorrectOption) {
      setCorrectOption(false);
    }
  }, [inputValue]);

  return {
    inputValue,
    handleChangeInput,
    handleCorrectOption,
    isCorrectOption,
    onInputBlurHandler,
  };
};
