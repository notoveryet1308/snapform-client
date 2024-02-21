/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Outlet } from "react-router-dom";
import { StyledFormBuilderWrapper } from "./style";
import { Input } from "../../../components/UI/Input";
import { PrimaryButton } from "../../../components/UI/Button";
import { useFormBuilderHeader } from "./hooks";

function FormBuilder() {
  const {
    builderDetail,
    editFormTitle,
    handleFormTitleChange,
    onSaveFormTitle,
    toggleTitleEdit,
  } = useFormBuilderHeader();

  return (
    <StyledFormBuilderWrapper $isQuiz={builderDetail.isQuiz}>
      <div className="form-category-and-title">
        <div className="form-category-left">
          <div className="form-category">{builderDetail.category}</div>
          <p className="separator">/</p>
          <div className="form-title-and-edit">
            {!editFormTitle ? (
              <p onClick={toggleTitleEdit} className="form-title">
                {builderDetail.title}
              </p>
            ) : (
              <>
                <Input
                  type="text"
                  name="form-title"
                  value={builderDetail.title}
                  onInputChange={handleFormTitleChange}
                  placeholder="Enter form name"
                  size="small"
                />
                <PrimaryButton
                  name="Save"
                  onClick={onSaveFormTitle}
                  size="small"
                />
              </>
            )}
          </div>
        </div>
        <PrimaryButton name="Publish" onClick={() => {}} size="small" />
      </div>
      <div className="builder-content">
        <Outlet />
      </div>
    </StyledFormBuilderWrapper>
  );
}

export default FormBuilder;
