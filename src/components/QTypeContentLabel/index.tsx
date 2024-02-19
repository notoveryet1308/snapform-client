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
}: {
  qType: ALL_QUESTION_TYPES;
  label?: string;
  order?: number;
  activeQuestionId?: string;
  id?: string;
  onClick?: () => void;
  showBorderRadius?: boolean;
}) {
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
    </StyledQTypeContentLabelWrapper>
  );
}

export default QTypeContentLabel;
