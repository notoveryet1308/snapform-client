import styled from "styled-components";

export const StyledChoiceButtonComboWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  align-items: center;

  .choice-btn-wrapper {
    width: 48%;
  }

  @media screen and (max-width: 1140px) {
    flex-wrap: wrap;
  }
`;
