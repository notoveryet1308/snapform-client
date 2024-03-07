import styled from "styled-components";

export const StyledProgressBarWrapper = styled.div`
  width: 100%;
  height: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.background.faded};
  overflow: hidden;

  .progress-status {
    height: 100%;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.background.primary};
  }
`;
