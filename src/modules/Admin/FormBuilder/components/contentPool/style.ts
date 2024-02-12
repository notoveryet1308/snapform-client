import styled from "styled-components";

export const StyledContentPoolWrapper = styled.div`
  width: 25%;
  max-width: 300px;
  background-color: ${({ theme }) => theme.color.white};

  .pool-header {
    padding: 8px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.border.tertiary};

    .pool-header-label {
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      color: ${({ theme }) => theme.color.text.primary};
      text-transform: uppercase;
    }
  }

  .pool-questions {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledContentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
