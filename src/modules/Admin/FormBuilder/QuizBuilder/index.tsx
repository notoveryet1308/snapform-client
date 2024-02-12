import { useEffect } from "react";

import { createLiveQuiz } from "../../../../_features/Admin/createLiveQuiz/liveQuizSlice";
import { useAppSelector, useAppDispatch } from "../../../../_store";
import Loader from "../../../../components/UI/Loader";
import ContentConfigure from "../components/contentConfigure/ContentConfigure";
import ContentPool from "../components/contentPool/ContentPool";
import QuizContent from "./QuizContent";

import { StyledQuizBuilderWrapper } from "./style";

function QuizBuilder() {
  const dispatch = useAppDispatch();
  const { liveQuiz } = useAppSelector((state) => state.liveQuiz);

  useEffect(() => {
    dispatch(createLiveQuiz());
  }, []);

  console.log({ activeId: liveQuiz.activeQuestionId });

  return (
    <StyledQuizBuilderWrapper>
      {liveQuiz.id ? (
        <>
          <ContentPool
            questions={liveQuiz.questions}
            activeQuestionId={liveQuiz.activeQuestionId}
          />
          <QuizContent
            content={
              liveQuiz.questions.filter(
                (q) => q.id === liveQuiz.activeQuestionId
              )[0]
            }
          />
          <ContentConfigure />
        </>
      ) : (
        <Loader />
      )}
    </StyledQuizBuilderWrapper>
  );
}

export default QuizBuilder;
