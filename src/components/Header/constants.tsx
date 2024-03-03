import { StyledLink } from "./style";

export const NAVIGATION_LIST = {
  LIVE_QUIZ: "live-quiz",
  DYNAMIC_FORMS: "dynamic-form",
  DASHBOARD: "dashboard",
};

export const BUILD_NAVIGATION = [
  {
    key: NAVIGATION_LIST.LIVE_QUIZ,
    content: (
      <StyledLink
        to="build/live-quiz"
        onClick={() => {
          console.log("build/live-quiz");
        }}
      >
        Live quiz
      </StyledLink>
    ),
  },
  {
    key: NAVIGATION_LIST.DYNAMIC_FORMS,
    content: (
      <StyledLink
        to="build/dynamic-form"
        onClick={() => {
          console.log("build/dynamic-form");
        }}
      >
        Dynamic forms
      </StyledLink>
    ),
  },
];
