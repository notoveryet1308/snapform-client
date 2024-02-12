import { useCallback, useState, ChangeEvent, useEffect } from "react";
import { QuestionOptionType } from "../../../type";

export const useChoiceBtnInput = ({
  getOptionDetail,
  choiceOrder = "",
}: {
  choiceOrder?: string;
  getOptionDetail: ({ label, isCorrectChoice }: QuestionOptionType) => void;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isCorrectOption, setCorrectOption] = useState(false);

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
    [inputValue]
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
  }, [isCorrectOption, inputValue, getOptionDetail, choiceOrder]);

  useEffect(() => {}, [isCorrectOption]);

  return {
    inputValue,
    handleChangeInput,
    handleCorrectOption,
    isCorrectOption,
    onInputBlurHandler,
  };
};
