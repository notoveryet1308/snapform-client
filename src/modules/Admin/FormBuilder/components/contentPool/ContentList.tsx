import { useState } from "react";
import { nanoid } from "nanoid";

import { Plus } from "phosphor-react";

import { SecondaryButton } from "../../../../../components/UI/Button";

import Modal from "../../../../../components/UI/Modal";
import { StyledContentListWrapper } from "./style";
import { ALL_QUESTION_LIST } from "../../../../../type";
import QTypeContentLabel from "../../../../../components/QTypeContentLabel";
import { useAppDispatch } from "../../../../../_store";
import { addQuestionType } from "../../../../../_features/Admin/createLiveQuiz/liveQuizSlice";

function ContentList() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useAppDispatch();

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleQuestionTypeClick = (qType: string) => {
    const newQuestionId = nanoid();
    dispatch(addQuestionType({ questionType: qType, id: newQuestionId }));
    toggleModal();
  };
  return (
    <>
      <SecondaryButton
        onClick={toggleModal}
        icon={<Plus />}
        onlyIcon
        shape="circle"
      />
      <Modal
        open={openModal}
        title="Select question type"
        onClose={toggleModal}
        align="center"
        showFooter={false}
      >
        <StyledContentListWrapper>
          {Object.keys(ALL_QUESTION_LIST).map((question) => (
            <QTypeContentLabel
              key={ALL_QUESTION_LIST[question]}
              qType={ALL_QUESTION_LIST[question]}
              onClick={() =>
                handleQuestionTypeClick(ALL_QUESTION_LIST[question])
              }
              showBorderRadius
            />
          ))}
        </StyledContentListWrapper>
      </Modal>
    </>
  );
}

export default ContentList;
