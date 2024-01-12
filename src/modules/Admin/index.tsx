import { Outlet } from "react-router-dom";
import { AdminSocketProvider } from "../../Context/adminSocketProvider";
import { StyledAdminWrapper } from "./style";

function Admin() {
  return (
    <AdminSocketProvider>
      <StyledAdminWrapper>
        <Outlet />
      </StyledAdminWrapper>
    </AdminSocketProvider>
  );
}

export default Admin;
