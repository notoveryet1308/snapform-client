import styled from "styled-components";

export const StyledFormPreviewCardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.faded};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.border.tertiary};
  cursor: pointer;
  transition: border-color 300ms ease-out;

  .card-left {
    position: relative;
    max-width: 70px;
    width: 70px;

    .form-preview-type {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -12px;
      left: 12px;
    }

    .form-preview-live-quiz-card {
    }
  }

  .card-right {
    padding: 8px 12px 8px 24px;
    flex: 1;
    display: flex;
    gap: 24px;
    justify-content: space-between;

    .card-detail-wrapper {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .card-title {
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        color: ${({ theme }) => theme.color.text.primary};
      }

      .card-question-count {
        font-size: 14px;
        line-height: 20px;
        color: ${({ theme }) => theme.color.text.secondary};
      }

      .card-creation-date {
        font-size: 12px;
        line-height: 16px;
        margin-top: 4px;
        color: ${({ theme }) => theme.color.text.tertiary};
      }
    }

    .card-action-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;

      .card-action-action {
        color: ${({ theme }) => theme.color.text.tertiary};
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.color.text.secondary};
        }
      }
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.border.secondary};
  }
`;

export const StyledFormPreviewTypeWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.background.tertiary};
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  padding: 12px;

  .type-identifier {
    width: 20px;
    height: 4px;
    border-radius: 8px;
  }

  .type-label {
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.color.text.primary};
    font-weight: 500;
  }

  &.live-quiz {
    .type-identifier {
      background-color: ${({ theme }) => theme.color.error.primary};
    }
  }

  &.dynamic-form {
    .type-identifier {
      background-color: ${({ theme }) => theme.color.success.primary};
    }
  }
`;
