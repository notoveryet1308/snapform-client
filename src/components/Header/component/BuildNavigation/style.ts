import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBuildNavigationWrapper = styled.div`
  padding: 8px 0;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.border.secondary};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background.faded};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  padding: 4px 12px;
  color: ${({ theme }) => theme.color.text.primary};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.color.background.tertiary};
  }
`;
