import styled from "styled-components";

export const StyledMultiSelectViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  flex: 1;

  .multi-select-content {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    align-items: flex-start;
  }

  .multi-select-view-options {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;

    .multi-option-wrapper {
      display: flex;
      flex-wrap: wrap;
      column-gap: 4%;
      row-gap: 20px;

      .multi-option-btn {
        width: 48%;
      }
    }
  }
`;
