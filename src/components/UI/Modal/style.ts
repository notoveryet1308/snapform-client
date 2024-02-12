import styled, { css } from 'styled-components';

const alignProp = {
  top: css`
    top: 48px;
  `,

  center: css`
    top: 50%;
    transform: translateY(-50%);
  `,
};

export const StyledModal = styled.div<{
  height?: number;
  width?: number;
  align: 'top' | 'center';
}>`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  

  .modal-mask-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.modalMaskOverlay};
  }
  .modal-content-wrapper {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    overflow: hidden;
    position: absolute;
    border-radius: 8px;
    justify-content: center;
  }

  .modal-content {
    display: flex;
    margin: 0 auto;
    border-radius: 8px;
    position: absolute;
    flex-direction: column;
    width: ${({ width }) => (width ? `${width}px` : '500px')};
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.border.tertiary};
    overflow: hidden;
    ${({ align }) => alignProp[align]};

    .modal-header {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 16px 24px;
      border-bottom: 1px solid ${({ theme }) => theme.color.border.tertiary};

      .modal-x-icon {
        cursor: pointer;
        font-size: 24px;
        color: ${({ theme }) =>theme.color.text.primary};
      }
    }
    .modal-body {
      padding: 24px;
      overflow-y: auto;
      height: ${({ height }) => !!height && `${height}px`};
      min-height: 400px;
      max-height: calc(100vh - 200px);
    }
    .modal-footer {
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.LARGE_MOBILE}px) {
    .modal-content-wrapper {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: fixed;

      .modal-content {
        top: 0;
        width: 100%;
        height: 100%;
        transform: unset;
        border-radius: 0;
        position: relative;

        .modal-body {
          flex: 1;
          max-height: unset;
          /* min-height: calc(100vh - 130px); */
        }
      }
    }
  }
`;

export const StyledModalHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: inherit;
  width: 100%;

  .header-title {
    color: ${({ theme }) => theme.color.text.primary};
    font-size: 16px;
    font-weight: 500;
  }
`;

export const StyledModalFooter = styled.footer`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.tertiary};
  gap: 8px;
`;
