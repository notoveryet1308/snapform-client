import { useLocation } from "react-router-dom";

import { NAVIGATION_LIST } from "../constants";

const useNavigationSelection = () => {
  const { pathname } = useLocation();

  let activeNavigation = "";
  let isDropdownNavigation = false;

  if (pathname.includes(NAVIGATION_LIST.LIVE_QUIZ)) {
    activeNavigation = NAVIGATION_LIST.LIVE_QUIZ;
    isDropdownNavigation = true;
  }

  if (pathname.includes(NAVIGATION_LIST.DYNAMIC_FORMS)) {
    activeNavigation = NAVIGATION_LIST.DYNAMIC_FORMS;
    isDropdownNavigation = true;
  }

  if (pathname.includes(NAVIGATION_LIST.DASHBOARD)) {
    activeNavigation = NAVIGATION_LIST.DASHBOARD;
    isDropdownNavigation = false;
  }

  return { activeNavigation, isDropdownNavigation };
};

export default useNavigationSelection;
