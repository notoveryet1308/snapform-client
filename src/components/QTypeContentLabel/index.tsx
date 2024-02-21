/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { X } from "@phosphor-icons/react";
import { ALL_QUESTION_TYPES } from "../../type";
import { Q_TYPE_ICONS } from "./constants";
import { StyledQTypeContentLabelWrapper } from "./style";

function QTypeContentLabel({
  qType,
  label,
  order,
  activeQuestionId,
  id,
  onClick,
  showBorderRadius,
  isRemovable,
  onRemove,
}: {
  qType: ALL_QUESTION_TYPES;
  label?: string;
  order?: number;
  activeQuestionId?: string;
  id?: string;
  onClick?: () => void;
  showBorderRadius?: boolean;
  isRemovable?: boolean;
  onRemove?: ({ id }: { id?: string }) => void;
}) {
  const handleRemoveQuestion = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onRemove && onRemove({ id });
  };
  return (
    <StyledQTypeContentLabelWrapper
      onClick={onClick}
      $isActive={activeQuestionId === id}
      $showBorderRadius={!!showBorderRadius}
    >
      {!!order && <p className="qtype-order">{order}.</p>}
      <div className="qtype-icon-wrapper">{Q_TYPE_ICONS[qType].icon}</div>
      {label ? (
        <span className="qtype-label">{label}</span>
      ) : (
        <span className="qtype-label">{Q_TYPE_ICONS[qType].label}</span>
      )}

      {isRemovable && (
        <div className="remove-question-wrapper" onClick={handleRemoveQuestion}>
          <X className="remove-question-icon" weight="bold" />
        </div>
      )}
    </StyledQTypeContentLabelWrapper>
  );
}

export default QTypeContentLabel;
