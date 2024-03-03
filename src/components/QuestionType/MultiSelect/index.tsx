import ChoiceButtonCombo from "../ChoiceButtonCombo";
import { Input, TextArea } from "../../UI/Input";
import { StyledMultiSelectWrapper } from "./style";
import { useMultiSelectData } from "./hooks";
import { QuestionSelectProps } from "../../../type";

const COMBO_OPTION_ONE = [
  { order: "A", placeholder: "Add answer" },
  { order: "B", placeholder: "Add answer" },
];

const COMBO_OPTION_TWO = [
  { order: "C", placeholder: "Add answer (optional)" },
  { order: "D", placeholder: "Add answer (optional)" },
];

const MultiSelect = ({
  valueFromParent,
  sendDataToParent,
}: QuestionSelectProps) => {
  const {
    multiSelectData,
    handleQuestionDescription,
    handleQuestionTitle,
    getOptionData,
  } = useMultiSelectData({
    valueFromParent,
    sendDataToParent,
  });

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
          options={multiSelectData.options}
        />
        <ChoiceButtonCombo
          choiceData={COMBO_OPTION_TWO}
          getOptionDetail={getOptionData}
          options={multiSelectData.options}
        />
      </div>
    </StyledMultiSelectWrapper>
  );
};

export default MultiSelect;
