import { Desktop, DeviceMobile, HardDrive } from "phosphor-react";
import { StyledQuizContentWrapper } from "./style";
import { QuizQuestionType } from "../../../../type";
import { ALL_QUESTION_TYPE_CONFIG } from "../../../../components/QuestionType";
import { updateQuestionData } from "../../../../_features/Admin/createLiveQuiz/liveQuizSlice";
import { useAppDispatch } from "../../../../_store";

function QuizContent({ content }: { content: QuizQuestionType }) {
  const dispatch = useAppDispatch();

  return (
    <StyledQuizContentWrapper>
      <div className="quiz-main-content">
        {ALL_QUESTION_TYPE_CONFIG[content.questionType]({
          valueFromParent: content,
          sendDataToParent: (data) => {
            dispatch(updateQuestionData(data));
          },
        })}
      </div>
      <div className="screen-view-mode">
        <DeviceMobile className="device-icon" />
        <HardDrive className="device-icon" />
        <Desktop className="device-icon" />
      </div>
    </StyledQuizContentWrapper>
  );
}

export default QuizContent;
