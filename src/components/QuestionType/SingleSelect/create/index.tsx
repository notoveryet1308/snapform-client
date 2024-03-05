import ChoiceButtonCombo from "./ChoiceButtonCombo";
import { Input, TextArea } from "../../../UI/Input";
import { StyledSingleSelectWrapper } from "./style";
import { useSingleSelectData } from "./hooks";
import { QuestionSelectProps } from "../../../../type";

const COMBO_OPTION_ONE = [
  { order: "A", placeholder: "Add answer" },
  { order: "B", placeholder: "Add answer" },
];

const COMBO_OPTION_TWO = [
  { order: "c", placeholder: "Add answer (optional)" },
  { order: "D", placeholder: "Add answer (optional)" },
];

const SingleSelect = ({
  valueFromParent,
  sendDataToParent,
}: QuestionSelectProps) => {
  const {
    singleSelectData,
    handleQuestionDescription,
    handleQuestionTitle,
    getOptionData,
    handleDisableSelectionOption,
  } = useSingleSelectData({
    valueFromParent,
    sendDataToParent,
  });

  return (
    <StyledSingleSelectWrapper>
      <div className="question-label">Single - select</div>
      <div className="question-content">
        <Input
          placeholder="Enter title"
          type="text"
          name="single-select-title"
          maxCharLimit={100}
          onInputChange={handleQuestionTitle}
          value={singleSelectData.title}
        />
        <TextArea
          placeholder="Enter description (optional)"
          maxCharLimit={400}
          onInputChange={handleQuestionDescription}
          name="single-select-description"
          value={singleSelectData.description}
        />
      </div>
      <div className="question-option">
        <ChoiceButtonCombo
          choiceData={COMBO_OPTION_ONE}
          getOptionDetail={getOptionData}
          handleDisableSelectionOption={handleDisableSelectionOption}
        />
        <ChoiceButtonCombo
          choiceData={COMBO_OPTION_TWO}
          getOptionDetail={getOptionData}
          handleDisableSelectionOption={handleDisableSelectionOption}
        />
      </div>
    </StyledSingleSelectWrapper>
  );
};

export default SingleSelect;
