import styled from "styled-components";

export const StyledJoinedPlayerList = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  overflow: auto;

  .waiting-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;

    .spinner-icon {
      color: ${({ theme }) => theme.color.text.accent};
    }

    .waiting-text {
      font-size: 16px;
      line-height: 20px;
      color: ${({ theme }) => theme.color.text.accent};
    }
  }
`;
