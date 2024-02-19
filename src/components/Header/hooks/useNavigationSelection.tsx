import { useLocation } from "react-router-dom";

import { NAVIGATION_LIST } from "../constants";

const useNavigationSelection = () => {
  const { pathname } = useLocation();

  let activeNavigation = "";

  if (pathname.includes(NAVIGATION_LIST.LIVE_QUIZ)) {
    activeNavigation = NAVIGATION_LIST.LIVE_QUIZ;
  }

  if (pathname.includes(NAVIGATION_LIST.DYNAMIC_FORMS)) {
    activeNavigation = NAVIGATION_LIST.DYNAMIC_FORMS;
  }

  if (pathname.includes(NAVIGATION_LIST.DASHBOARD)) {
    activeNavigation = NAVIGATION_LIST.DASHBOARD;
  }

  return { activeNavigation };
};

export default useNavigationSelection;
