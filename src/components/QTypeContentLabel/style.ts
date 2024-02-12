import styled from "styled-components";

export const StyledQTypeContentLabelWrapper = styled.div<{
  $isActive: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 12px;
  padding: 12px 24px;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.tertiary};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.background.faded : "inherit"};

  .qtype-order {
    color: ${({ theme }) => theme.color.text.primary};
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
  }

  .qtype-icon-wrapper {
    padding: 8px;
    background-color: ${({ theme }) => theme.color.background.primary};
    color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  .qtype-label {
    color: ${({ theme }) => theme.color.text.primary};
    font-size: 14px;
    line-height: 20px;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.background.faded};
  }
`;
