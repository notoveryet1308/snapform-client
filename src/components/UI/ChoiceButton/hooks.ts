import { useCallback, useState, ChangeEvent, useEffect } from "react";
import { QuestionOptionType } from "../../../type";

export const useChoiceBtnInput = ({
  getOptionDetail,
  choiceOrder,
}: {
  choiceOrder: string;
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

  const handleCorrectOption = useCallback((state: boolean) => {
    setCorrectOption(state);
  }, []);

  useEffect(() => {
    getOptionDetail({
      order: choiceOrder,
      label: inputValue,
      isCorrectChoice: isCorrectOption,
    });

    if (!inputValue && isCorrectOption) {
      setCorrectOption(false);
    }
  }, [isCorrectOption, inputValue, getOptionDetail, choiceOrder]);

  return {
    inputValue,
    handleChangeInput,
    handleCorrectOption,
    isCorrectOption,
  };
};
