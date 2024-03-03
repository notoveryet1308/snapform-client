import { useCallback, useEffect, useState } from "react";
import { useImmer } from "use-immer";

import {
  QuestionOptionType,
  ALL_QUESTION_TYPES,
  QuizQuestionType,
  QuestionSelectProps,
} from "../../../type";

const singleSelectInitialState: QuizQuestionType = {
  questionType: ALL_QUESTION_TYPES.MULTI_SELECT,
  title: "",
  description: "",
  options: [],
  id: "",
};

export const useSingleSelectData = ({
  valueFromParent,
  sendDataToParent,
}: QuestionSelectProps) => {
  const [disableSelection, setDisableSelection] = useState(false);
  const [singleSelectData, updateSingleSelectData] = useImmer<QuizQuestionType>(
    valueFromParent || singleSelectInitialState
  );

  const handleQuestionTitle = (value: string) => {
    updateSingleSelectData((draft) => {
      draft.title = value;
    });
  };

  const handleQuestionDescription = useCallback(
    (value: string) => {
      updateSingleSelectData((draft) => {
        draft.description = value;
      });
    },
    [updateSingleSelectData]
  );

  const getOptionData = (value: QuestionOptionType) => {
    const filterIncomingData = singleSelectData.options.filter(
      (option) => option.order !== value.order
    );

    updateSingleSelectData((draft) => {
      draft.options = [...filterIncomingData, value];
    });
  };

  const handleDisableSelectionOption = ({ order }: { order: string }) => {
    return disableSelection
      ? !singleSelectData.options.find((op) => op.order === order)
          ?.isCorrectChoice
      : false;
  };

  useEffect(() => {
    if (sendDataToParent) {
      sendDataToParent(singleSelectData);
    }
  }, [singleSelectData]);

  useEffect(() => {
    const correctOptionSelected = singleSelectData.options.find(
      (option) => option.isCorrectChoice
    );
    if (correctOptionSelected) {
      setDisableSelection(true);
    }
    if (disableSelection && !correctOptionSelected) setDisableSelection(false);
  }, [singleSelectData.options]);

  useEffect(() => {
    if (valueFromParent) {
      updateSingleSelectData((draft) => {
        draft.options = valueFromParent.options;
        draft.description = valueFromParent.description;
        draft.id = valueFromParent.id;
        draft.title = valueFromParent.title;
        draft.questionType = valueFromParent.questionType;
      });
    }
  }, [valueFromParent?.id]);

  return {
    singleSelectData,
    handleQuestionTitle,
    handleQuestionDescription,
    getOptionData,
    handleDisableSelectionOption,
  };
};
