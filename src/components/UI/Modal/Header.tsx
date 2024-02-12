import { StyledModalHeader } from './style';

const ModalHeader = ({ title }: { title: string }) => {
  return (
    <StyledModalHeader>
      <h2 className='header-title'>{title}</h2>
    </StyledModalHeader>
  );
};

export default ModalHeader;
