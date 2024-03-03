import { StyledFormPreviewTypeWrapper } from "./style";

const FormType = ({
  className,
  type,
  label,
}: {
  className?: string;
  type: string;
  label: string;
}) => {
  return (
    <StyledFormPreviewTypeWrapper
      className={`${className} ${type.toLocaleLowerCase()}`}
    >
      <div className="type-identifier"></div>
      <span className="type-label">{label}</span>
    </StyledFormPreviewTypeWrapper>
  );
};

export default FormType;
