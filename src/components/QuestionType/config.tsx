import { ALL_QUESTION_LIST, QuestionSelectProps } from "../../type";
import MultiSelectCreate from "./MultiSelect/create";
import SingleSelectCreate from "./SingleSelect/create";
import YesNoChoice from "./YesNoChoice/create";

const ALL_QUESTION_TYPE_CONFIG = {
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

export default ALL_QUESTION_TYPE_CONFIG;
