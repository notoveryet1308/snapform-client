import React from "react";
import { ALL_QUESTION_LIST } from "../../type";
import MultiSelect from "./MultiSelect";
import { MultiSelectProps } from "./MultiSelect/hooks";
import SingleSelect from "./SingleSelect";
import YesNoChoice from "./YesNoChoice";

const ALL_QUESTION_TYPE_CONFIG = {
  [ALL_QUESTION_LIST.MULTI_SELECT]: (props: MultiSelectProps) => {
    return <MultiSelect {...props} />;
  },
  [ALL_QUESTION_LIST.SINGLE_SELECT]: (props: MultiSelectProps) => {
    return <SingleSelect {...props} />;
  },
  [ALL_QUESTION_LIST.YES_NO_SELECT]: () => {
    return <YesNoChoice />;
  },
};

export default ALL_QUESTION_TYPE_CONFIG;
