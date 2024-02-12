import styled from "styled-components";

export const StyledChoiceButtonBase = styled.button`
  position: relative;
  width: 100%;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  .choice-btn-content {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 12px;
    border-radius: 4px;
    height: 40px;
    transition: transform 300ms ease-out;
    background-color: ${({ theme }) => theme.color.background.faded};
    padding-right: 12px;
    z-index: 2;

    .choice-btn-number {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px 0 0 4px;
      width: 30px;
      height: 100%;
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.background.secondary};
    }
  }

  &.choice-selected {
    .choice-btn-content {
      background-color: ${({ theme }) => theme.color.background.primary};
    }
  }

  .choice-btn-overlay {
    position: absolute;
    z-index: 1;
    width: 100%;
    display: flex;
    top: 4px;
    left: 4px;
    height: 100%;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.background.tertiary};
    transition: top 300ms ease-out;
  }

  &:active {
    .choice-btn-overlay {
      top: 0px;
    }
    .choice-btn-content {
      transform: translateY(2px);
    }
  }

  &.choice-selection-disabled {
    pointer-events: none;
    cursor: no-drop;

    .choice-btn-overlay {
      background-color: ${({ theme }) => theme.color.disabled.border};
    }

    .choice-btn-content {
      background-color: ${({ theme }) => theme.color.disabled.secondary};
      .choice-btn-number {
        background-color: ${({ theme }) => theme.color.disabled.primary};
        color: ${({ theme }) => theme.color.disabled.tertiary};
      }
    }
  }
`;

export const StyledChoiceButtonEditWrapper = styled.div`
  position: relative;
  width: 100%;

  .choice-btn-input {
    border: none;
    background-color: inherit;
    flex: 1;
    outline: none;
    padding: 0 12px;
    color: ${({ theme }) => theme.color.text.primary};
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;

    &::placeholder {
      color: ${({ theme }) => theme.color.text.tertiary};
      font-weight: normal;
    }
  }
`;

export const StyledChoiceButtonWrapper = styled.div<{
  $isSelected: boolean;
  $isSelectionDisabled?: boolean;
}>`
  .choice-label {
    color: ${({ theme, $isSelected, $isSelectionDisabled }) =>
      !$isSelectionDisabled
        ? !$isSelected
          ? theme.color.text.primary
          : theme.color.white
        : theme.color.disabled.tertiary};
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
  }
`;
