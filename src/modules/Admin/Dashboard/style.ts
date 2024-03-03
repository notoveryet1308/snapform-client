import styled from "styled-components";

export const StyledDashboardWrapper = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.color.white};
  padding: 24px;
  max-width: 1120px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  .dashboard-content {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    .dashboard-form-preview-card {
      max-width: 45%;
    }
  }

  @media screen and (max-width: 768px) {
    .dashboard-content {
      .dashboard-form-preview-card {
        max-width: 100%;
      }
    }
  }
`;
