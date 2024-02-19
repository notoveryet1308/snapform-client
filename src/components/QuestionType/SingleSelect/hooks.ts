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
  option: [],
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
    const filterIncomingData = singleSelectData.option.filter(
      (option) => option.order !== value.order
    );

    updateSingleSelectData((draft) => {
      draft.option = [...filterIncomingData, value];
    });
  };

  const handleDisableSelectionOption = ({ order }: { order: string }) => {
    return disableSelection
      ? !singleSelectData.option.find((op) => op.order === order)
          ?.isCorrectChoice
      : false;
  };

  useEffect(() => {
    if (sendDataToParent) {
      sendDataToParent(singleSelectData);
    }
  }, [singleSelectData]);

  useEffect(() => {
    const correctOptionSelected = singleSelectData.option.find(
      (option) => option.isCorrectChoice
    );
    if (correctOptionSelected) {
      setDisableSelection(true);
    }
    if (disableSelection && !correctOptionSelected) setDisableSelection(false);
  }, [singleSelectData.option]);

  useEffect(() => {
    if (valueFromParent) {
      updateSingleSelectData((draft) => {
        draft.option = valueFromParent.option;
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
