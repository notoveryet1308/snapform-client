export type DropdownOptionType = {
  key: string;
  content: React.ReactNode | string;
};

export interface DropdownPropsType {
  trigger?: React.ReactNode;
  label?: string | React.ReactNode;
  placeholder: string;
  triggerType: "text" | "border" | "filled";
  options: DropdownOptionType[];
  optionNode?: React.ReactNode;
  showLabelAndValue?: boolean;
  value?: string;
  classNames?: {
    wrapper?: string;
    triggerWrapper?: string;
    contentWrapper?: string;
  };
  onSelect: (value: string) => void;
}

export type TriggerLabelType = {
  label: string;
  selectedValue: React.ReactNode | string;
};

export type DropdownTriggerPropsType = {
  placeholder: TriggerLabelType;
  isOpen: boolean;
  triggerType: "text" | "border" | "filled";
  isValueSelected: boolean;
};

export type DropdownOptionPropsType = {
  option: React.ReactNode | string;
};
