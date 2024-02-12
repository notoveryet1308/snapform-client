import { ChoiceButtonEdit } from "../../UI/ChoiceButton";
import { Input, TextArea } from "../../UI/Input";
import { useYesNoData } from "./hooks";
import { StyledYesNoWrapper } from "./style";

function YesNoChoice() {
  const {
    yesNoSelectData,
    handleQuestionDescription,
    handleQuestionTitle,
    getOptionData,
    disableSelection,
    handleOneItemSelectionCheck,
  } = useYesNoData();
  return (
    <StyledYesNoWrapper>
      <div className="question-label">Yes/No - select</div>
      <div className="question-content">
        <Input
          placeholder="Enter title"
          type="text"
          name="multi-select-title"
          maxCharLimit={100}
          onInputChange={handleQuestionTitle}
          value={yesNoSelectData.title}
        />
        <TextArea
          placeholder="Enter description (optional)"
          maxCharLimit={400}
          onInputChange={handleQuestionDescription}
          name="multi-select-description"
          value={yesNoSelectData.description}
        />
      </div>
      <div className="question-option">
        <ChoiceButtonEdit
          placeholder="Yes"
          choiceOrder="A"
          hideChoiceOrder
          getOptionDetail={getOptionData}
          disableCheckbox={handleOneItemSelectionCheck({ order: "A" })}
        />
        <ChoiceButtonEdit
          placeholder="No"
          choiceOrder="B"
          hideChoiceOrder
          getOptionDetail={getOptionData}
          disableCheckbox={handleOneItemSelectionCheck({ order: "B" })}
        />
      </div>
    </StyledYesNoWrapper>
  );
}

export default YesNoChoice;
