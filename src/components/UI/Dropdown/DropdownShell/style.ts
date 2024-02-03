import styled from "styled-components";

export const StyledDropdownShell = styled.div<{
  isSelected: boolean;
  contentZIndex: number;
  transparentButton: boolean;
  dropdownName: boolean;
  isActive: boolean;
}>`
  position: relative;
  width: 100%;

  .dropdown-shell-name {
    color: ${({ theme }) => theme.color.text.primary};
    font-size: 14px;
    margin-bottom: 8px;
  }

  .dd-shell-main-btn {
    width: 100%;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    background: ${({ theme, transparentButton }) =>
      !transparentButton ? theme.color.background.faded : "transparent"};
    border-radius: 8px;
    border: 1px solid transparent;
    border-color: ${({ isSelected, theme }) =>
      isSelected ? theme.color.border.primary : "transparent"};
    cursor: pointer;

    .dd-shell-main-btn-label-wrapper {
      display: flex;
      gap: 4px;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      color: ${({ theme, isSelected }) =>
        isSelected ? theme.color.text.primary : theme.color.text.secondary};
      font-size: 14px;
      line-height: 20px;
      overflow-x: auto;
      scrollbar-width: none;

      .selected-item-label {
        font-weight: 600;
      }

      &::-webkit-scrollbar {
        display: none;
      }

      .dd-shell-custom-icon {
        font-size: 20px;
        display: flex;
      }

      .dd-main-btn-label {
        white-space: nowrap;
      }
    }

    .dd-btn-caret-icon {
      font-size: 20px;
      color: ${({ theme }) => theme.color.text.primary};
      margin-left: 8px;
    }
  }

  .dd-content {
    width: fit-content;
    position: absolute;
    top: ${({ dropdownName }) => (dropdownName ? "80px" : "48px")};
    left: 0;
    background: ${({ theme }) => theme.color.background.faded};
    z-index: ${({ contentZIndex }) => contentZIndex || 2};
    border-radius: 8px;

    .dd-content-empty {
      color: ${({ theme }) => theme.color.text.secondary};
      font-size: 14px;
    }
  }

  &.text-dropdown {
    .dd-shell-main-btn {
      background: inherit;
      border-bottom: 1px solid
        ${({ isActive, theme }) =>
          isActive ? theme.color.border.primary : "none"};
      border-radius: 0;

      .dd-btn-caret-icon {
        font-size: 14px;
      }
    }
  }

  &&.disabled {
    .dd-shell-main-btn {
      cursor: no-drop;
    }
  }
`;
