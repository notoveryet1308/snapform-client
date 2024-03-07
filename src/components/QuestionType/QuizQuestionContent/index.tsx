import { StyledQuestionContentWrapper } from "./style";

const TITLE =
  "Which of the following is not a valid way to declare a variable in JavaScript?";

const DESCRIPTION =
  "In JavaScript, variables can be declared using different keywords such as var, let, and const. Each keyword has its own rules and behaviors for variable declaration and assignment. This question asks you to identify the invalid way of declaring a variable among the given options. Understanding the correct ways to declare variables is essential for writing clean and efficient JavaScript code";

const QuizQuestionContent = ({
  title = TITLE,
  description = DESCRIPTION,
  questionType,
}: {
  title: string;
  description?: string;
  questionType: string;
}) => {
  return (
    <StyledQuestionContentWrapper>
      <div className="question-type-label">{questionType}</div>
      <h2 className="quiz-question-title">{title}</h2>
      {description && (
        <p className="quiz-question-description">{description}</p>
      )}
    </StyledQuestionContentWrapper>
  );
};

export default QuizQuestionContent;
