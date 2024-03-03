import { ShareNetwork, Play } from "@phosphor-icons/react";

import { FORM_TYPE } from "../../appConfig";

import { StyledFormPreviewCardWrapper } from "./style";
import FORM_PREVIEW_CONFIG from "./config";

interface FormPreviewProps {
  title: string;
  createdAt: string;
  questionCount: number;
  previewType: FORM_TYPE;
  className?: string;
}

function FormPreviewCard({
  title,
  createdAt,
  previewType,
  className,
  questionCount,
}: FormPreviewProps) {
  return (
    <StyledFormPreviewCardWrapper className={className}>
      <div className="card-left">
        <div className="form-preview-type">
          {FORM_PREVIEW_CONFIG[previewType]({ className: "" })}
        </div>
      </div>
      <div className="card-right">
        <div className="card-detail-wrapper">
          <span className="card-title">{title}</span>
          <span className="card-question-count">{questionCount} Question</span>
          <span className="card-creation-date">{createdAt}</span>
        </div>
        <div className="card-action-wrapper">
          <ShareNetwork
            weight="bold"
            className="card-action-action share-icon"
          />
          <Play weight="bold" className="card-action-action play-icon" />
        </div>
      </div>
    </StyledFormPreviewCardWrapper>
  );
}

export default FormPreviewCard;
