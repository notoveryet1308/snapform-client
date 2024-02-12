import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background.tertiary};
  padding: 8px 16px;
  border-radius: 4px;
  margin: 0;
  display: flex;
  font-family: ${({ theme }) => theme.font.family.default};
  border-bottom: 2px solid ${({ theme }) => theme.color.background.secondary};
  transition: border-bottom 300ms ease-in-out;
  justify-content: space-between;
  width: 100%;

  &.small {
    padding: 4px 8px;
  }

  .input-char-limit {
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;

    &.over {
      color: ${({ theme }) => theme.color.error.primary};
    }
  }

  &:focus-within {
    border-bottom: 2px solid ${({ theme }) => theme.color.background.primary};
  }
`;

export const StyledInput = styled.input`
  width: 90%;
  border: none;
  background-color: inherit;
  outline: none;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.text.primary};

  &::placeholder {
    color: ${({ theme }) => theme.color.text.tertiary};
  }
`;

export const StyledTextAreaWrapper = styled.div<{
  height?: number;
  isResizable?: boolean;
}>`
  background-color: ${({ theme }) => theme.color.background.tertiary};
  padding: 10px 16px;
  border-radius: 4px;
  margin: 0;
  display: flex;
  font-family: ${({ theme }) => theme.font.family.default};
  border-bottom: 2px solid ${({ theme }) => theme.color.background.secondary};
  transition: border-bottom 300ms ease-in-out;
  justify-content: space-between;
  width: 100%;
  height: ${({ height, isResizable }) =>
    !isResizable ? (height ? `${height}px` : "100px") : "unset"};

  .input-char-limit {
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;

    &.over {
      color: ${({ theme }) => theme.color.error.primary};
    }
  }

  &:focus-within {
    border-bottom: 2px solid ${({ theme }) => theme.color.background.primary};
  }
`;

export const StyledTextArea = styled.textarea<{ isResizable?: boolean }>`
  border: none;
  background: inherit;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  resize: ${({ isResizable }) => (isResizable ? "auto" : "none")};
  outline: none;
  font-size: 14px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.font.family.default};

  &::placeholder {
    color: ${({ theme }) => theme.color.text.tertiary};
  }
`;
