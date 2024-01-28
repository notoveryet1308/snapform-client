export type CommonInputProps = {
  name: string;
  value?: string;
  onInputChange: (value: string) => void;
  placeholder: string;
  maxCharLimit?: number;
};

export interface InputProp extends CommonInputProps {
  type: string;
}

export interface TextAreaProps extends CommonInputProps {
  height?: number;
  isResizable?: boolean;
}
