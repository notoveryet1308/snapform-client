import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "small" | "medium" | "large";
type ButtonShape = "circle";

export type BaseButtonProps = {
  name?: string;
  onClick: () => void;
  className?: string;
  icon?: ReactNode;
  onlyIcon?: boolean;
  variant: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  disabled?: boolean;
};

export interface PrimaryButtonProps extends Omit<BaseButtonProps, "variant"> {}
export interface SecondaryButtonProps
  extends Omit<BaseButtonProps, "variant"> {}
export interface TertiaryButtonProps extends Omit<BaseButtonProps, "variant"> {}
