import { StyledDropdownOptionWrapper } from "./style";

import { DropdownOptionPropsType } from "./types";

const DropdownOption = ({ option }: DropdownOptionPropsType) => (
  <StyledDropdownOptionWrapper>{option}</StyledDropdownOptionWrapper>
);

export default DropdownOption;
