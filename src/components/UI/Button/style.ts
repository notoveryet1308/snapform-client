import styled from "styled-components";

export const StyledBaseButton = styled.button`
  padding: 9px 16px;
  justify-content: center;
  display: flex;
  border: none;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  column-gap: 4px;
  font-family: ${({ theme }) => theme.font.family.default};
  font-size: 14px;
  line-height: 20px;
  border: 1px solid transparent;

  .btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-text {
  }

  &.primary {
    background-color: ${({ theme }) => theme.color.background.primary};
    color: ${({ theme }) => theme.color.white};
  }

  &.circle {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 0;
  }

  &.disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.color.disabled.primary};
    color: ${({ theme }) => theme.color.disabled.tertiary};
  }
`;

export const StyledCheckButtonWrapper = styled.div<{
  $isChecked: boolean;
  $isDisabled?: boolean;
}>`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $isDisabled }) =>
    !$isDisabled ? theme.color.success.primary : theme.color.disabled.primary};
  cursor: ${({ $isDisabled }) => ($isDisabled ? "no-drop" : "pointer")};

  .check-btn-content {
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, $isChecked }) =>
      !$isChecked ? theme.color.background.faded : theme.color.success.primary};

    .checked-icon {
      color: ${({ theme }) => theme.color.white};
    }
  }
`;
