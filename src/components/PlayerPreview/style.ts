import styled from "styled-components";

export const StyledPlayerPreview = styled.div`
  padding:  32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #113353;
  border-radius: 8px;
  position: relative;
  margin: 40px 30px;

  .player-preview-avatar {
    width: 100px;
    height: 80px;
    position: absolute;
    top: -70px;
    left: -30%;
    z-index: -1;
  }

  .player-preview-name {
  }
`;
