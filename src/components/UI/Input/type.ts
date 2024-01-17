export type InputProps = {
  name: string;
  type: string;
  value?: string;
  onInputChange: (value: string) => void;
  placeholder: string;
};
