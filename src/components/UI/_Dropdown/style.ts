import styled from "styled-components";

export const StyledDropdownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .dropdown-name-wrapper {
    font-size: 14px;
    color: ${({ theme }) => theme.color.text.primary};
    line-height: 20px;
  }

  .dropdown-trigger-wrapper {
    cursor: pointer;
  }

  .dropdown-content-wrapper {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.border.secondary};
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.color.white};
    z-index: 2;

    .option-wrapper {
      width: 100%;
      position: relative;
    }
  }
`;

export const StyledDropdownTriggerWrapper = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 14px;
  column-gap: 4px;

  &.border-type {
    border: 1px solid ${({ theme }) => theme.color.border.primary};
    border-radius: 8px;
  }

  &.text-type {
    padding: 0;
    row-gap: 16px;
  }

  &.selected-value {
    font-weight: 600;
  }

  .trigger-label-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 4px;
  }

  .trigger-icon {
    font-size: 14px;
  }
`;

export const StyledDropdownOptionWrapper = styled.div`
  width: 100%;
  padding: 8px 16px;
  cursor: pointer;
  background-color: inherit;
  color: ${({ theme }) => theme.color.text.primary};

  &:hover {
    background-color: ${({ theme }) => theme.color.background.faded};
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;
