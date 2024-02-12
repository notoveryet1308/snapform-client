import Logo from "../UI/Logo";
import { StyledLink, StyledMainHeaderWrapper } from "./style";
import { DropdownShell } from "../UI/Dropdown";
import BuildNavigation from "./component/BuildNavigation";

function MainHeader() {
  return (
    <StyledMainHeaderWrapper>
      <Logo />
      <div className="main-navigation">
        <DropdownShell
          btnLabel="Build"
          content={<BuildNavigation />}
          variant="text-dropdown"
        />
        <StyledLink to="/dashboard">Dashboard</StyledLink>
      </div>
      <div className="side-navigation"></div>
    </StyledMainHeaderWrapper>
  );
}

export default MainHeader;
