import { useState, MouseEvent, useEffect, memo } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { StyledCheckButtonWrapper } from "./style";

function CheckButton({
  getCheckedState,
  shouldUncheck,
  disable,
}: {
  disable: boolean;
  shouldUncheck: boolean;
  getCheckedState: (state: boolean) => void;
}) {
  const [isChecked, setChecked] = useState(false);
  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setChecked(() => !isChecked);
    getCheckedState(!isChecked);
  };

  useEffect(() => {
    if (shouldUncheck) {
      setChecked(false);
    }
  }, [shouldUncheck]);
  return (
    <StyledCheckButtonWrapper
      onClick={handleOnClick}
      $isChecked={isChecked}
      $isDisabled={disable}
    >
      <div className="check-btn-content">
        {isChecked && (
          <CheckFat className="checked-icon" size={14} weight="fill" />
        )}
      </div>
    </StyledCheckButtonWrapper>
  );
}

export default memo(CheckButton);
