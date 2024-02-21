import { Timer, Exam } from "@phosphor-icons/react";

import Dropdown from "../../../../../components/UI/_Dropdown";
import {
  StyledContentConfigureWrapper,
  StyledContentConfigureDropdownLabel,
} from "./style";
import { POINTS_OPTIONS, TIME_LIMIT_OPTIONS } from "./constants";
import { useAppDispatch } from "../../../../../_store";
import {
  updatePointConfiguration,
  updateTimeLimitConfiguration,
} from "../../../../../_features/Admin/createLiveQuiz/liveQuizSlice";

function ContentConfigure({
  id,
  timeLimit,
  point,
}: {
  id: string;
  timeLimit: string;
  point: string;
}) {
  const dispatch = useAppDispatch();

  const handleTimeLimit = ({ value }: { name: string; value: string }) => {
    dispatch(updateTimeLimitConfiguration({ id, value }));
  };
  const handlePoint = ({ value }: { name: string; value: string }) => {
    dispatch(updatePointConfiguration({ id, value }));
  };

  return (
    <StyledContentConfigureWrapper>
      <div className="configure-label">Configure</div>
      <div className="configure-content-wrapper">
        <Dropdown
          options={TIME_LIMIT_OPTIONS}
          name="timeLimit"
          placeholder="Select time"
          triggerType="border"
          onSelect={handleTimeLimit}
          label={
            <StyledContentConfigureDropdownLabel>
              <Timer className="dropdown-label-icon" weight="bold" />
              <span className="dropdown-label">Time limit</span>
            </StyledContentConfigureDropdownLabel>
          }
          value={timeLimit}
        />

        <Dropdown
          options={POINTS_OPTIONS}
          placeholder="Select point"
          name="point"
          triggerType="border"
          onSelect={handlePoint}
          label={
            <StyledContentConfigureDropdownLabel>
              <Exam className="dropdown-label-icon" weight="bold" />
              <span className="dropdown-label">Points</span>
            </StyledContentConfigureDropdownLabel>
          }
          value={point}
        />
      </div>
    </StyledContentConfigureWrapper>
  );
}

export default ContentConfigure;
