import styled from "styled-components";

export const StyledGameHeaderWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.secondary};

  .game-name {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.text.accent};
  }
`;
