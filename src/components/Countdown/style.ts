import styled from "styled-components";

export const StyledCountdownWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  .countdown-label {
    font-size: 20px;
    line-height: 20px;
    color: ${({ theme }) => theme.color.text.accent};
  }

  .countdown-number {
    font-size: 60px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.text.accent};
  }
`;
