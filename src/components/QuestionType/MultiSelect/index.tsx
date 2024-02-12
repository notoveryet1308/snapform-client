import ChoiceButtonCombo from "./ChoiceButtonCombo";
import { Input, TextArea } from "../../UI/Input";
import { StyledMultiSelectWrapper } from "./style";
import { useMultiSelectData, MultiSelectProps } from "./hooks";

const COMBO_OPTION_ONE = [
  { order: "A", placeholder: "Add answer" },
  { order: "B", placeholder: "Add answer" },
];

const COMBO_OPTION_TWO = [
  { order: "c", placeholder: "Add answer (optional)" },
  { order: "D", placeholder: "Add answer (optional)" },
];

const MultiSelect = ({
  multiSelectValueFromParent,
  sendMultiSelectDataToParent,
}: MultiSelectProps) => {
  const {
    multiSelectData,
    handleQuestionDescription,
    handleQuestionTitle,
    getOptionData,
  } = useMultiSelectData({
    sendMultiSelectDataToParent,
    multiSelectValueFromParent,
  });

  console.log({ multiSelectData, multiSelectValueFromParent });

  return (
    <StyledMultiSelectWrapper>
      <div className="question-label">Multiple - select</div>
      <div className="question-content">
        <Input
          placeholder="Enter title"
          type="text"
          name="multi-select-title"
          maxCharLimit={100}
          onInputChange={handleQuestionTitle}
          value={multiSelectData.title}
        />
        <TextArea
          placeholder="Enter description (optional)"
          maxCharLimit={400}
          onInputChange={handleQuestionDescription}
          name="multi-select-description"
          value={multiSelectData.description}
        />
      </div>
      <div className="question-option">
        <ChoiceButtonCombo
          choiceData={COMBO_OPTION_ONE}
          getOptionDetail={getOptionData}
        />
        <ChoiceButtonCombo
          choiceData={COMBO_OPTION_TWO}
          getOptionDetail={getOptionData}
        />
      </div>
    </StyledMultiSelectWrapper>
  );
};

export default MultiSelect;
