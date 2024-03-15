import {
  ALL_QUESTION_LIST,
  QuestionSelectProps,
  MultiSelectQuizQuestionViewType,
  SingleSelectQuizQuestionViewType,
} from "../../type";
import MultiSelectCreate from "./MultiSelect/create";
import SingleSelectCreate from "./SingleSelect/create";
import YesNoChoice from "./YesNoChoice/create";

import MultiSelectView from "./MultiSelect/view";
import SingleSelectView from "./SingleSelect/view";
import YesNoSelectView from "./YesNoChoice/view";

const ALL_QUESTION_CREATE_TYPE_CONFIG = {
  [ALL_QUESTION_LIST.MULTI_SELECT]: (props: QuestionSelectProps) => {
    return <MultiSelectCreate {...props} />;
  },
  [ALL_QUESTION_LIST.SINGLE_SELECT]: (props: QuestionSelectProps) => {
    return <SingleSelectCreate {...props} />;
  },
  [ALL_QUESTION_LIST.YES_NO_SELECT]: (props: QuestionSelectProps) => {
    return <YesNoChoice {...props} />;
  },
};

const ALL_QUESTION_VIEW_TYPE_CONFIG = {
  [ALL_QUESTION_LIST.MULTI_SELECT]: (
    props: MultiSelectQuizQuestionViewType
  ) => {
    return <MultiSelectView {...props} />;
  },
  [ALL_QUESTION_LIST.SINGLE_SELECT]: (
    props: SingleSelectQuizQuestionViewType
  ) => {
    return <SingleSelectView {...props} />;
  },
  [ALL_QUESTION_LIST.YES_NO_SELECT]: (
    props: SingleSelectQuizQuestionViewType
  ) => {
    return <YesNoSelectView {...props} />;
  },
};

export { ALL_QUESTION_CREATE_TYPE_CONFIG, ALL_QUESTION_VIEW_TYPE_CONFIG };
