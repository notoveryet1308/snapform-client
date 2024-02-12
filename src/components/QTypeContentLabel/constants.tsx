import { Check, Checks, SealCheck } from "@phosphor-icons/react";
import { ALL_QUESTION_TYPES } from "../../type";

export const Q_TYPE_ICONS = {
  [ALL_QUESTION_TYPES.MULTI_SELECT]: {
    icon: <Checks className="multi-select-icon" />,
    label: "Multi select",
  },
  [ALL_QUESTION_TYPES.YES_NO_SELECT]: {
    icon: <SealCheck className="yes-no-select-icon" />,
    label: "Yes | No",
  },
  [ALL_QUESTION_TYPES.SINGLE_SELECT]: {
    icon: <Check className="single-select-icon" />,
    label: "Single select",
  },
};
