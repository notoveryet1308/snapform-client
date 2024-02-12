import { useImmer } from "use-immer";

import {
  QuestionOptionType,
  MultiSelectDataType,
  ALL_QUESTION_TYPES,
} from "../../../type";
import { useCallback, useEffect } from "react";

export type MultiSelectProps = {
  multiSelectValueFromParent?: MultiSelectDataType;
  sendMultiSelectDataToParent?: (data: MultiSelectDataType) => void;
};

const multiSelectInitialState: MultiSelectDataType = {
  questionType: ALL_QUESTION_TYPES.MULTI_SELECT,
  title: "",
  description: "",
  option: [],
};

export const useMultiSelectData = ({
  multiSelectValueFromParent,
  sendMultiSelectDataToParent,
}: MultiSelectProps) => {
  const [multiSelectData, updateMultiSelectData] =
    useImmer<MultiSelectDataType>(
      multiSelectValueFromParent || multiSelectInitialState
    );

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
    console.log({ multiSelectData, value });
    const filterIncomingData = multiSelectData.option.filter(
      (option) => option.order !== value.order
    );

    updateMultiSelectData((draft) => {
      draft.option = [...filterIncomingData, value];
    });
  };

  useEffect(() => {
    if (sendMultiSelectDataToParent) {
      sendMultiSelectDataToParent(multiSelectData);
    }
  }, [multiSelectData]);

  return {
    multiSelectData,
    handleQuestionTitle,
    handleQuestionDescription,
    getOptionData,
  };
};
