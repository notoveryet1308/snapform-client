import styled from "styled-components";

export const StyledLivePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .game-container {
    flex: 1;
    overflow-y: auto;
  }
`;
