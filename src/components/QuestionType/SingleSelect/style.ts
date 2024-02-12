import styled from "styled-components";

export const StyledSingleSelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 40px;
  flex: 1;

  .question-label {
    border-radius: 40px;
    padding: 4px 8px;
    color: ${({ theme }) => theme.color.white};
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.color.warning.primary};
  }

  .question-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 16px;
  }

  .question-option {
    width: 100%;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    flex: 1;
    align-content: flex-end;
  }
`;

export const StyledChoiceButtonComboWrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 16px;
  align-items: center;
  .choice-btn-wrapper {
    width: 48%;
  }
`;
