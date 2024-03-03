import { FORM_TYPE } from "../../appConfig";
import FormType from "./FormType";

const FORM_PREVIEW_CONFIG = {
  [FORM_TYPE.LIVE_QUIZ]: ({ className }: { className?: string }) => (
    <FormType className={className} label="Quiz" type={FORM_TYPE.LIVE_QUIZ} />
  ),

  [FORM_TYPE.DYNAMIC_FORM]: ({ className }: { className?: string }) => (
    <FormType
      className={className}
      label="FORM"
      type={FORM_TYPE.DYNAMIC_FORM}
    />
  ),
};

export default FORM_PREVIEW_CONFIG;
