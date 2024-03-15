import styled from "styled-components";

export const StyledYesNoSelectViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  flex: 1;

  .yes-no-select-content {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    align-items: flex-start;
  }

  .yes-no-select-view-options {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;

    .yes-no-option-wrapper {
      display: flex;
      flex-wrap: wrap;
      column-gap: 4%;
      row-gap: 20px;

      .yes-no-option-btn {
        width: 48%;
      }
    }
  }
`;
