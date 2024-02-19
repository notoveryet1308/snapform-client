import { useImmer } from "use-immer";

import {
  QuestionOptionType,
  MultiSelectDataType,
  ALL_QUESTION_TYPES,
  QuestionSelectProps,
} from "../../../type";
import { useCallback, useEffect } from "react";

const multiSelectInitialState: MultiSelectDataType = {
  questionType: ALL_QUESTION_TYPES.MULTI_SELECT,
  title: "",
  description: "",
  option: [],
  id: "",
};

export const useMultiSelectData = ({
  valueFromParent,
  sendDataToParent,
}: QuestionSelectProps) => {
  const [multiSelectData, updateMultiSelectData] =
    useImmer<MultiSelectDataType>(valueFromParent || multiSelectInitialState);

  const handleQuestionTitle = (value: string) => {
    updateMultiSelectData((draft) => {
      draft.title = value;
    });
  };

  const handleQuestionDescription = useCallback(
    (value: string) => {
      updateMultiSelectData((draft) => {
        draft.description = value;
      });
    },
    [updateMultiSelectData]
  );

  const getOptionData = (value: QuestionOptionType) => {
    const filterIncomingData = multiSelectData.option.filter(
      (option) => option.order !== value.order
    );

    updateMultiSelectData((draft) => {
      draft.option = [...filterIncomingData, value];
    });
  };

  useEffect(() => {
    if (sendDataToParent) {
      sendDataToParent(multiSelectData);
    }
  }, [multiSelectData]);

  useEffect(() => {
    if (valueFromParent) {
      updateMultiSelectData((draft) => {
        draft.option = valueFromParent.option;
        draft.description = valueFromParent.description;
        draft.id = valueFromParent.id;
        draft.title = valueFromParent.title;
        draft.questionType = valueFromParent.questionType;
      });
    }
  }, [valueFromParent?.id]);

  return {
    multiSelectData,
    handleQuestionTitle,
    handleQuestionDescription,
    getOptionData,
  };
};
