import { Outlet, Route, Routes } from "react-router-dom";

import LiveUIPage from "./live";

const User = () => {
  return (
    <div>
      <h1>Quiz name</h1>
      <Outlet />
    </div>
  );
};

export default User;
