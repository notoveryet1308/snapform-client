import styled from "styled-components";

export const StyledPlayerPreview = styled.div`
  position: relative;
  padding: 0 16px 16px 16px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.faded};
  border-radius: 8px;
  position: relative;
  gap: 16px;

  .player-preview-avatar {
    width: 80px;
    height: 80px;
  }

  .player-preview-name {
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.text.primary};
  }

  .admin-tag {
    display: inline-block;
    position: absolute;
    top: -10px;
    left: -10px;
    background-color: ${({ theme }) => theme.color.background.secondary};
    color: ${({ theme }) => theme.color.text.primary};
    padding: 4px;
    border-radius: 4px;
    font-size: 12px;
  }
`;
