import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const getFormCategoryFromPathname = (
  pathname: string
): { category: string; initialTitle: string; isQuiz: boolean } => {
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
  const [editFormTitle, setEditFormTitle] = useState(false);
  const [builderDetail, setBuilderDetail] = useState({
    title: "",
    category: "",
    isQuiz: false,
  });
  const { pathname } = useLocation();

  const handleFormTitleChange = (value: string) => {
    setBuilderDetail({ ...builderDetail, title: value });
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
    toggleTitleEdit
  };
};
