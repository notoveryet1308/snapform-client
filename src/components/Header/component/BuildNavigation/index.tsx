import { StyledBuildNavigationWrapper, StyledLink } from "./style";

function BuildNavigation() {
  return (
    <StyledBuildNavigationWrapper>
      <StyledLink to="build/live-quiz">Live quiz</StyledLink>
      <StyledLink to="build/dynamic-form">Dynamic forms</StyledLink>
    </StyledBuildNavigationWrapper>
  );
}

export default BuildNavigation;
