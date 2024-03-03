import Logo from "../UI/Logo";
import { StyledLink, StyledMainHeaderWrapper } from "./style";
import Dropdown from "../UI/_Dropdown";
import { noop } from "../../apiUtils";
import { BUILD_NAVIGATION, NAVIGATION_LIST } from "./constants";
import useNavigationSelection from "./hooks/useNavigationSelection";

function MainHeader() {
  const { activeNavigation, isDropdownNavigation } = useNavigationSelection();

  return (
    <StyledMainHeaderWrapper>
      <Logo />
      <div className="main-navigation">
        <Dropdown
          name="main-navigation"
          options={BUILD_NAVIGATION}
          triggerType="text"
          placeholder="Build"
          onSelect={noop}
          showLabelAndValue
          classNames={{ contentWrapper: "main-navigation-dropdown-content" }}
          value={isDropdownNavigation ? activeNavigation : ""}
        />
        <StyledLink  to={NAVIGATION_LIST.DASHBOARD}>Dashboard</StyledLink>
      </div>
      <div className="side-navigation"></div>
    </StyledMainHeaderWrapper>
  );
}

export default MainHeader;
