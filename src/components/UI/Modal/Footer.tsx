import React from 'react';
import { StyledModalFooter } from './style';
import { PrimaryButton, SecondaryButton } from '../Button';

const ModalFooter = ({
  onCancel,
  onOk,
  okBtnLabel,
  cancelBtnLabel,
}: {
  onCancel: Function;
  onOk: Function;
  okBtnLabel?: string;
  cancelBtnLabel?: string;
}) => {
  return (
    <StyledModalFooter>
      <SecondaryButton label={cancelBtnLabel || 'Cancel'} onClick={onCancel} />
      <PrimaryButton label={okBtnLabel || 'Ok'} onClick={onOk} />
    </StyledModalFooter>
  );
};

export default ModalFooter;
