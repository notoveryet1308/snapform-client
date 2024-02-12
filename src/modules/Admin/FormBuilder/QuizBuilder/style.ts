import styled from "styled-components";

export const StyledQuizBuilderWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  column-gap: 16px;
`;

export const StyledQuizContentWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.color.almostWhite};
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  align-items: center;
  row-gap: 8px;

  .quiz-main-content {
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.border.tertiary};
    padding: 24px;
    height: 100%;
    overflow-y: auto;
    display: flex;
  }

  .screen-view-mode {
    display: flex;
    column-gap: 16px;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.color.background.tertiary};
    border-radius: 8px;

    .device-icon {
      font-size: 20px;
      color: ${({ theme }) => theme.color.text.primary};
      cursor: pointer;
      transition: color 300ms ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.color.text.tertiary};
      }
    }
  }
`;
