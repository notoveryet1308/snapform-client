import styled from "styled-components";

export const StyledFormBuilderWrapper = styled.div<{ $isQuiz: boolean }>`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  .form-category-and-title {
    display: flex;
    column-gap: 4px;
    align-items: center;
    color: ${({ theme }) => theme.color.text.primary};
    font-size: 16px;
    line-height: 22px;
    height: 50px;
    padding: 0 24px;
    border-bottom: 1px solid ${({ theme }) => theme.color.border.tertiary};

    .form-category {
      background-color: ${({ $isQuiz, theme }) =>
        $isQuiz ? theme.color.error.primary : theme.color.success.primary};
      padding: 4px 8px;
      border-radius: 4px;
      color: ${({ theme }) => theme.color.white};
    }

    .separator {
      color: ${({ theme }) => theme.color.text.tertiary};
    }

    .form-title-and-edit {
      display: flex;
      gap: 16px;
      align-items: center;

      .form-title {
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;
