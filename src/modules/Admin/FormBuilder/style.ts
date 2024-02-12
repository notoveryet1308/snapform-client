import styled from "styled-components";

export const StyledFormBuilderWrapper = styled.div<{ $isQuiz: boolean }>`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;


  .form-category-and-title {
    display: flex;
    column-gap: 4px;
    align-items: center;
    color: ${({ theme }) => theme.color.text.primary};
    font-size: 16px;
    line-height: 22px;
    height: 50px;
    padding: 0 24px;
    border-bottom: 1px solid ${({ theme }) => theme.color.background.faded};

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
      gap: 8px;
      align-items: center;

      .form-title {
        font-weight: 500;
        cursor: pointer;
      }
    }
  }

  .builder-content {
    display: flex;
    flex: 1;
    height: calc(100% - 55px);
    background-color: ${({ theme }) => theme.color.almostWhite};
  }
`;
