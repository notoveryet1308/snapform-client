import styled from "styled-components";

export const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;

  .brand-name {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    font-family: ${({ theme }) => theme.font.family.default};
    color: ${({ theme }) => theme.color.text.primary};
  }
`;
