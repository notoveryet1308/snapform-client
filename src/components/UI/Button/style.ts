import styled from "styled-components";

export const StyledBaseButton = styled.button`
  padding: 8px 16px;
  justify-content: center;
  display: flex;
  border: none;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  column-gap: 4px;
  font-family: ${({ theme }) => theme.font.family.default};
  font-size: 14px;
  line-height: 16px;
  border: 1px solid transparent;

  .btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-text {
  }

  &.primary {
    background-color: ${({ theme }) => theme.color.button.bg_primary};
    color: ${({ theme }) => theme.color.text.primary};

    &:hover {
      background-color: ${({ theme }) => theme.color.button.bg_primary_hover};
    }
    &:active {
      background-color: ${({ theme }) => theme.color.button.bg_primary_active};
    }
  }

  &.circle {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    padding: 0;
  }

  &.disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.color.button.disabled};
    color: ${({ theme }) => theme.color.text.disabled};
    &:hover {
      background-color: ${({ theme }) => theme.color.button.disabled};
    }
    &:active {
      background-color: ${({ theme }) => theme.color.button.disabled};
    }
  }
`;
