import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Admin from "./modules/Admin";
import User from "./modules/User";
import LiveUIPage from "./modules/User/live";

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Admin />} />
        <Route path="user" element={<User />}>
          <Route path="live" element={<LiveUIPage />} />
        </Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
