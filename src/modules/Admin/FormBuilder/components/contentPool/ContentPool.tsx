import { StyledContentPoolWrapper } from "./style";
import { QuizQuestionType } from "../../../../../type";
import QTypeContentLabel from "../../../../../components/QTypeContentLabel";
import ContentList from "./ContentList";
import { useAppDispatch } from "../../../../../_store";
import {
  updateActiveQuestionId,
  removeQuizQuestion,
} from "../../../../../_features/Admin/createLiveQuiz/liveQuizSlice";

function ContentPool({
  questions,
  activeQuestionId,
}: {
  questions: QuizQuestionType[];
  activeQuestionId: string;
}) {
  const dispatch = useAppDispatch();

  return (
    <StyledContentPoolWrapper>
      <div className="pool-header">
        <p className="pool-header-label">Content</p>
        <ContentList />
      </div>
      <div className="pool-questions">
        {questions.map((q, index) => (
          <QTypeContentLabel
            key={q.id}
            qType={q.questionType}
            label={q.title}
            order={index + 1}
            activeQuestionId={activeQuestionId}
            id={q.id}
            onClick={() =>
              dispatch(updateActiveQuestionId({ activeQuestionId: q.id }))
            }
            isRemovable={questions.length > 1}
            onRemove={({ id }: { id?: string }) => {
              dispatch(removeQuizQuestion({ qId: id }));
            }}
          />
        ))}
      </div>
    </StyledContentPoolWrapper>
  );
}

export default ContentPool;
