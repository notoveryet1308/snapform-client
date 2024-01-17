import styled from "styled-components";

export const StyledLivePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .game-container {
    flex: 1;
    overflow-y: auto;
  }
`;
