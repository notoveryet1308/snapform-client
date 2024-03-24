import styled from "styled-components";

export const StyledPlayerGameManagerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .quiz-content {
    display: flex;
    padding: 12px 8px 24px;
    margin: 24px;
    max-width: 700px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.border.tertiary};
    border-radius: 8px;
  }
`;
