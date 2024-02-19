import { useLocation } from "react-router-dom";

import Logo from "../UI/Logo";
import { StyledLink, StyledMainHeaderWrapper } from "./style";
import Dropdown from "../UI/_Dropdown";
import { noop } from "../../apiUtils";
import { BUILD_NAVIGATION } from "./constants";
import useNavigationSelection from "./hooks/useNavigationSelection";

function MainHeader() {
  const { activeNavigation } = useNavigationSelection();

  return (
    <StyledMainHeaderWrapper>
      <Logo />
      <div className="main-navigation">
        <Dropdown
          options={BUILD_NAVIGATION}
          triggerType="text"
          placeholder="Build"
          onSelect={noop}
          showLabelAndValue
          classNames={{ contentWrapper: "main-navigation-dropdown-content" }}
          value={activeNavigation}
        />
        <StyledLink to="/dashboard">Dashboard</StyledLink>
      </div>
      <div className="side-navigation"></div>
    </StyledMainHeaderWrapper>
  );
}

export default MainHeader;
