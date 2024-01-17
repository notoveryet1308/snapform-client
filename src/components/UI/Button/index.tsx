import { StyledBaseButton } from "./style";
import {
  BaseButtonProps,
  PrimaryButtonProps,
  SecondaryButtonProps,
  TertiaryButtonProps,
} from "./type";

function BaseButton({
  name,
  onClick,
  className,
  icon,
  onlyIcon,
  variant,
  shape,
  size,
  disabled,
}: BaseButtonProps) {
  const onClickHandler = () => {
    if (disabled) return null;
    onClick();
  };
  return (
    <StyledBaseButton
      className={`base-btn ${className} ${variant} ${size} ${
        disabled && "disabled"
      } ${onlyIcon && shape}`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {!!icon && <span className="btn-icon">{icon}</span>}
      {!onlyIcon && <span className="btn-text">{name}</span>}
    </StyledBaseButton>
  );
}

function PrimaryButton(props: PrimaryButtonProps) {
  return <BaseButton variant="primary" {...props} />;
}
function SecondaryButton(props: SecondaryButtonProps) {
  return <BaseButton variant="secondary" {...props} />;
}
function TertiaryButton(props: TertiaryButtonProps) {
  return <BaseButton variant="tertiary" {...props} />;
}

export { PrimaryButton, SecondaryButton, TertiaryButton };
