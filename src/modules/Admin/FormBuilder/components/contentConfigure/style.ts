import styled from "styled-components";

export const StyledContentConfigureWrapper = styled.div`
  width: 25%;
  max-width: 300px;
  background-color: ${({ theme }) => theme.color.white};

  .configure-label{
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 16px 24px;
    border-bottom: 1px solid ${({ theme }) => theme.color.border.tertiary};
  }
`;
