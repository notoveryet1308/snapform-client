import { ALL_QUESTION_LIST, QuestionSelectProps } from "../../type";
import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";
import YesNoChoice from "./YesNoChoice";

const ALL_QUESTION_TYPE_CONFIG = {
  [ALL_QUESTION_LIST.MULTI_SELECT]: (props: QuestionSelectProps) => {
    return <MultiSelect {...props} />;
  },
  [ALL_QUESTION_LIST.SINGLE_SELECT]: (props: QuestionSelectProps) => {
    return <SingleSelect {...props} />;
  },
  [ALL_QUESTION_LIST.YES_NO_SELECT]: (props: QuestionSelectProps) => {
    return <YesNoChoice {...props} />;
  },
};

export default ALL_QUESTION_TYPE_CONFIG;
