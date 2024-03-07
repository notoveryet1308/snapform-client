import styled from "styled-components";

export const StyledQuestionContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: flex-start;

  .question-type-label {
    border-radius: 40px;
    padding: 4px 8px;
    color: ${({ theme }) => theme.color.white};
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.color.warning.primary};
  }

  .quiz-question-title {
    color: ${({ theme }) => theme.color.text.primary};
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
  }

  .quiz-question-description {
    color: ${({ theme }) => theme.color.text.secondary};
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }
`;
