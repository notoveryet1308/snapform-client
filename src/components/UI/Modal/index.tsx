import React, { useEffect } from "react";
import ReactDom from "react-dom";
import { X } from "phosphor-react";

import { StyledModal } from "./style";
import ModalHeader from "./Header";
import ModalFooter from "./Footer";

interface ModalPropsCustom {
  height?: number;
  width?: number;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  title: string;
  className?: string;
  showCloseIcon?: boolean;
  style?: React.CSSProperties;
  onOk?: () => void;
  okBtnLabel?: string;
  showFooter?: boolean;
  align: "top" | "center";
}

const ModalShell = ({
  open,
  onOk,
  title,
  width,
  style,
  height,
  header,
  footer,
  onClose,
  children,
  className,
  okBtnLabel,
  align = "center",
  showFooter = true,
  showCloseIcon = true,
}: ModalPropsCustom) => {
  return (
    <>
      {open && (
        <StyledModal
          aria-label="modal"
          height={height}
          width={width}
          className={`${className} base-modal`}
          align={align}
        >
          <div className="modal-mask-overlay"></div>
          <div role="dialog" className="modal-content-wrapper" style={style}>
            <div className="modal-content">
              <div className="modal-header">
                {!header ? <ModalHeader title={title} /> : header}
                {showCloseIcon ? (
                  <X className="modal-x-icon" onClick={() => onClose()} />
                ) : null}
              </div>
              <div className="modal-body">{children}</div>
              <div className="modal-footer">
                {showFooter && !footer ? (
                  <ModalFooter
                    onCancel={onClose}
                    onOk={onOk ? onOk : () => {}}
                    okBtnLabel={okBtnLabel}
                  />
                ) : (
                  footer
                )}
              </div>
            </div>
          </div>
        </StyledModal>
      )}
    </>
  );
};

const Modal = (props: ModalPropsCustom) => {
  const elementOnMount = document.getElementById("modal-c") as HTMLDivElement;

  useEffect(() => {
    if (props.open) {
      elementOnMount.style.display = "flex";
      elementOnMount.style.top = "0";
      elementOnMount.style.left = "0";
      elementOnMount.style.width = "100%";
      elementOnMount.style.height = "100%";
      elementOnMount.style.position = "fixed";
      elementOnMount.style.zIndex = "999";
    }
    return () => {
      elementOnMount.style.display = "none";
    };
  }, [props.open]);

  return ReactDom.createPortal(<ModalShell {...props} />, elementOnMount);
};

export default Modal;
