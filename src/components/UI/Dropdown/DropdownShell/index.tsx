import { ReactNode, useEffect, useRef, useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";
import { StyledDropdownShell } from "./style";
import { useOutsideClickHook } from "./hooks";

export type DropdownShellPropType = {
  dropdownName?: string;
  btnLabel: string;
  selectedValue?: any;
  multi?: boolean;
  selectedValueCount?: number;
  content?: ReactNode;
  btnIcon?: ReactNode;
  onDropdownBtnClick?: ({ name }: { name: string }) => void;
  className?: string;
  contentZIndex?: number;
  hideContent?: boolean;
  name?: string;
  isContentVisible?: boolean;
  transparentButton?: boolean;
  closeDropdownContent?: boolean;
  selectedContent?: React.ReactNode;
  disabled?: boolean;
  showCaret?: boolean;
  variant: "default" | "text-dropdown";
};

const DropdownShell = ({
  btnLabel = "Dropdown",
  selectedValue,
  selectedValueCount,
  multi,
  content,
  btnIcon,
  className,
  contentZIndex = 2,
  hideContent = false,
  onDropdownBtnClick,
  name,
  isContentVisible = false,
  transparentButton = false,
  closeDropdownContent = false,
  selectedContent,
  dropdownName,
  disabled,
  showCaret = true,
  variant,
}: DropdownShellPropType) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [contentVisible, setContentVisible] = useState(isContentVisible);

  const handleToggleDropdown = () => {
    if (!disabled) {
      setContentVisible(!contentVisible);
      onDropdownBtnClick && onDropdownBtnClick({ name: name || "" });
    }
  };

  useOutsideClickHook({
    handler: () => {
      setContentVisible(false);
    },
    ref: dropdownRef,
  });

  useEffect(() => {
    setContentVisible(isContentVisible);
  }, [isContentVisible]);

  useEffect(() => {
    if (closeDropdownContent) {
      setContentVisible(false);
    }
  }, [closeDropdownContent]);

  return (
    <StyledDropdownShell
      className={`dd-shell ${className} ${
        disabled ? "disabled" : ""
      } ${variant}`}
      isSelected={!!selectedValue || !!selectedValueCount}
      isActive={!!contentVisible}
      contentZIndex={contentZIndex}
      transparentButton={transparentButton}
      ref={dropdownRef}
      dropdownName={!!dropdownName}
    >
      {dropdownName && <p className="dropdown-shell-name">{dropdownName}</p>}
      <button className="dd-shell-main-btn" onClick={handleToggleDropdown}>
        <div className="dd-shell-main-btn-label-wrapper">
          {!selectedContent ? (
            <>
              <span className="dd-shell-custom-icon">{btnIcon}</span>
              <span className="dd-main-btn-label">
                {btnLabel}
                {multi
                  ? (!!selectedValueCount && ` ${selectedValueCount} value`) ||
                    ""
                  : selectedValue || ""}
              </span>
            </>
          ) : (
            <p className="selected-item-label"> - ({selectedContent})</p>
          )}
        </div>
        {showCaret &&
          (!contentVisible ? (
            <CaretDown className="dd-btn-caret-icon down" />
          ) : (
            <CaretUp className="dd-btn-caret-icon up" />
          ))}
      </button>
      {!hideContent && contentVisible ? (
        <div className="dd-content">
          {content || (
            <span className="dd-content-empty">Empty {btnLabel} options..</span>
          )}
        </div>
      ) : null}
    </StyledDropdownShell>
  );
};

export default DropdownShell;
