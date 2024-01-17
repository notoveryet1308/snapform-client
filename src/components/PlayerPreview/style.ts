import styled from "styled-components";

export const StyledPlayerPreview = styled.div`
  padding: 0 16px 16px 16px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.tertiary};
  border-radius: 8px;
  position: relative;
  gap: 16px;
  border: 1px solid ${({ theme }) => theme.color.border.accent};

  .player-preview-avatar {
    width: 100px;
    height: 100px;
  }

  .player-preview-name {
    font-size: 20px;
    color: ${({ theme }) => theme.color.text.accent};
  }
`;
