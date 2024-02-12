import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import { QuestionOptionType } from "../../../type";

type YesNoSelectDataType = {
  questionType: string;
  title: string;
  description: string;
  option: QuestionOptionType[];
};

const yesNoSelectInitialState = {
  questionType: "yesNoSelect",
  title: "",
  description: "",
  option: [],
};

export const useYesNoData = () => {
  const [disableSelection, setDisableSelection] = useState(false);
  const [yesNoSelectData, updateYesNoSelectData] =
    useImmer<YesNoSelectDataType>(yesNoSelectInitialState);

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
    const filterIncomingData = yesNoSelectData.option.filter(
      (option) => option.order !== value.order
    );

    updateYesNoSelectData((draft) => {
      draft.option = [...filterIncomingData, value];
    });
  };

  const handleOneItemSelectionCheck = ({ order }: { order: string }) => {
    return disableSelection
      ? !yesNoSelectData.option.find((op) => op.order === order)
          ?.isCorrectChoice
      : false;
  };

  useEffect(() => {
    if (yesNoSelectData.option.length > 0) {
      if (yesNoSelectData.option.some((option) => option.isCorrectChoice)) {
        setDisableSelection(true);
      } else if (disableSelection) {
        setDisableSelection(false);
      }
    }
  }, [yesNoSelectData.option]);

  console.log({ yesNoSelectData });

  return {
    yesNoSelectData,
    handleQuestionTitle,
    handleQuestionDescription,
    getOptionData,
    disableSelection,
    handleOneItemSelectionCheck,
  };
};
