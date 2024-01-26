import styled from "styled-components";

export const StyledLoadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 12px;
  flex-direction: column;

  .loader {
    border: 8px solid ${({ theme }) => theme.color.border.primary};
    border-left-color: ${({ theme }) => theme.color.border.accent};
    border-radius: 50%;

    animation: spin 1s linear infinite;

    &.small {
      width: 30px;
      height: 30px;
    }

    &.medium {
      width: 40px;
      height: 40px;
    }

    &.large {
      width: 60px;
      height: 60px;
    }
  }

  .loading-text {
    color: ${({ theme }) => theme.color.text.accent};
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
