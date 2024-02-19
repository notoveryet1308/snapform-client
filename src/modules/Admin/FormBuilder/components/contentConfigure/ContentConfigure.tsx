import { Timer, Exam } from "@phosphor-icons/react";

import Dropdown from "../../../../../components/UI/_Dropdown";
import {
  StyledContentConfigureWrapper,
  StyledContentConfigureDropdownLabel,
} from "./style";

function ContentConfigure() {
  return (
    <StyledContentConfigureWrapper>
      <div className="configure-label">Configure</div>
      <div className="configure-content-wrapper">
        <Dropdown
          options={[
            { key: "30", content: "30 sec" },
            { key: "40", content: "40 sec" },
            { key: "50", content: "60 sec" },
          ]}
          placeholder="Select time"
          triggerType="border"
          onSelect={() => {}}
          label={
            <StyledContentConfigureDropdownLabel>
              <Timer className="dropdown-label-icon" weight="bold" />
              <span className="dropdown-label">Time limit</span>
            </StyledContentConfigureDropdownLabel>
          }
        />

        <Dropdown
          options={[
            { key: "1000", content: "Standard" },
            { key: "2000", content: "Double" },
            { key: "4000", content: "4 times" },
          ]}
          placeholder="Select point"
          triggerType="border"
          onSelect={() => {}}
          label={
            <StyledContentConfigureDropdownLabel>
              <Exam className="dropdown-label-icon" weight="bold" />
              <span className="dropdown-label">Points</span>
            </StyledContentConfigureDropdownLabel>
          }
        />
      </div>
    </StyledContentConfigureWrapper>
  );
}

export default ContentConfigure;
