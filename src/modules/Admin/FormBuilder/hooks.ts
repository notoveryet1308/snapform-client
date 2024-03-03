import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../_store";
import { updateLiveQuizTitle } from "../../../_features/Admin/createLiveQuiz/liveQuizSlice";

const getFormCategoryFromPathname = (
  pathname: string
): {
  category: string;
  initialTitle: string;
  isQuiz: boolean;
} => {
  let category = "";
  let initialTitle = "";
  let isQuiz = false;

  if (pathname.includes("live-quiz")) {
    category = "Live quiz";
    initialTitle = "My live quiz";
    isQuiz = true;
  }

  if (pathname.includes("dynamic-form")) {
    category = "Dynamic form";
    initialTitle = "My form";
    isQuiz = false;
  }

  return { category, initialTitle, isQuiz };
};

export const useFormBuilderHeader = () => {
  const { liveQuiz } = useAppSelector((state) => state.liveQuiz);
  const dispatch = useAppDispatch();

  const [editFormTitle, setEditFormTitle] = useState(false);
  const [builderDetail, setBuilderDetail] = useState({
    title: "",
    category: "",
    isQuiz: false,
  });
  const { pathname } = useLocation();

  const handleFormTitleChange = (value: string) => {
    setBuilderDetail({ ...builderDetail, title: value });
    dispatch(updateLiveQuizTitle({ id: liveQuiz.id, title: value }));
  };
  const toggleTitleEdit = () => {
    setEditFormTitle(!editFormTitle);
  };

  const onSaveFormTitle = () => {
    toggleTitleEdit();
  };

  useEffect(() => {
    if (pathname) {
      setEditFormTitle(false);
      const { initialTitle, category, isQuiz } =
        getFormCategoryFromPathname(pathname);
      setBuilderDetail({ category, title: initialTitle, isQuiz });
    }
  }, [pathname]);

  return {
    handleFormTitleChange,
    onSaveFormTitle,
    editFormTitle,
    builderDetail,
    toggleTitleEdit,
  };
};
