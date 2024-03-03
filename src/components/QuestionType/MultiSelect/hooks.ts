import { useImmer } from "use-immer";
import { useCallback, useEffect } from "react";

import {
  QuestionOptionType,
  MultiSelectDataType,
  ALL_QUESTION_TYPES,
  QuestionSelectProps,
} from "../../../type";

const multiSelectInitialState: MultiSelectDataType = {
  questionType: ALL_QUESTION_TYPES.MULTI_SELECT,
  title: "",
  description: "",
  options: [],
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
    const filterUnchangedOptions = multiSelectData.options.filter((option) => {
      if (option.order !== value.order) return option;
    });

    updateMultiSelectData((draft) => {
      draft.options = [...filterUnchangedOptions, value];
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
        draft.options = valueFromParent.options;
        draft.description = valueFromParent.description;
        draft.id = valueFromParent.id;
        draft.title = valueFromParent.title;
        draft.questionType = valueFromParent.questionType;
      });
    }
  }, [valueFromParent?.id]);

  useEffect(() => {
    console.log({ effectOp: multiSelectData.options });
  }, [multiSelectData.options]);

  return {
    multiSelectData,
    handleQuestionTitle,
    handleQuestionDescription,
    getOptionData,
  };
};
