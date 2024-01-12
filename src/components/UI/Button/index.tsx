import { StyledButtonWrapper } from "./style";
import { ButtonProps } from "./type";

function Button({ name, onClick }: ButtonProps) {
  return (
    <StyledButtonWrapper>
      <button onClick={onClick}>{name}</button>
    </StyledButtonWrapper>
  );
}

export default Button;
