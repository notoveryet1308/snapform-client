import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background.secondary};
  padding: 8px 16px;
  border-radius: 4px;
  margin: 0;
  display: flex;
  border: 1px solid transparent;
  font-family: ${({ theme }) => theme.font.family.default};

  &:focus-within {
    border-bottom: 1px solid ${({ theme }) => theme.color.border.accent};
  }
`;

export const StyledInput = styled.input`
  border: none;
  background-color: inherit;
  height: 16px;
  outline: none;
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;
