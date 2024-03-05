import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import {
  ALL_QUESTION_TYPES,
  QuestionOptionType,
  QuestionSelectProps,
  QuizQuestionType,
} from "../../../../type";

const yesNoSelectInitialState = {
  questionType: ALL_QUESTION_TYPES.YES_NO_SELECT,
  title: "",
  description: "",
  options: [],
  id: "",
};

export const useYesNoData = ({
  valueFromParent,
  sendDataToParent,
}: QuestionSelectProps) => {
  const [disableSelection, setDisableSelection] = useState(false);
  const [yesNoSelectData, updateYesNoSelectData] = useImmer<QuizQuestionType>(
    valueFromParent || yesNoSelectInitialState
  );

  const handleQuestionTitle = (value: string) => {
    updateYesNoSelectData((draft) => {
      draft.title = value;
    });
  };

  const handleQuestionDescription = (value: string) => {
    updateYesNoSelectData((draft) => {
      draft.description = value;
    });
  };

  const getOptionData = (value: QuestionOptionType) => {
    const filterIncomingData = yesNoSelectData.options.filter(
      (option) => option.order !== value.order
    );

    updateYesNoSelectData((draft) => {
      draft.options = [...filterIncomingData, value];
    });
  };

  const handleOneItemSelectionCheck = ({ order }: { order: string }) => {
    return disableSelection
      ? !yesNoSelectData.options.find((op) => op.order === order)
          ?.isCorrectChoice
      : false;
  };

  useEffect(() => {
    if (yesNoSelectData.options.length > 0) {
      if (yesNoSelectData.options.some((option) => option.isCorrectChoice)) {
        setDisableSelection(true);
      } else if (disableSelection) {
        setDisableSelection(false);
      }
    }
  }, [yesNoSelectData.options]);

  useEffect(() => {
    if (valueFromParent) {
      updateYesNoSelectData((draft) => {
        draft.options = valueFromParent.options;
        draft.description = valueFromParent.description;
        draft.id = valueFromParent.id;
        draft.title = valueFromParent.title;
        draft.questionType = valueFromParent.questionType;
      });
    }
  }, [valueFromParent?.id]);

  useEffect(() => {
    if (sendDataToParent) {
      sendDataToParent(yesNoSelectData);
    }
  }, [yesNoSelectData]);

  return {
    yesNoSelectData,
    handleQuestionTitle,
    handleQuestionDescription,
    getOptionData,
    disableSelection,
    handleOneItemSelectionCheck,
  };
};
