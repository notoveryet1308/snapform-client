import { Outlet, useParams } from "react-router-dom";
import { AdminSocketProvider } from "../../Context/adminSocketProvider";
import { StyledAdminWrapper } from "./style";
import { MainHeader } from "../../components/Header";

function Admin() {
  const params = useParams();
  const showMainHeader = !params?.gameId;

  return (
    <AdminSocketProvider>
      <StyledAdminWrapper>
        {showMainHeader && <MainHeader />}
        <Outlet />
      </StyledAdminWrapper>
    </AdminSocketProvider>
  );
}

export default Admin;
