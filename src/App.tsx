import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./modules/Admin";
import Player from "./modules/Player";
import PlayerLivePage from "./modules/Player/live";
import LiveGame from "./modules/Admin/LiveGame";

const HomePage = () => {
  return <h1>Home page</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="admin" element={<Admin />}>
          <Route path="live/:gameId" element={<LiveGame />} />
        </Route>
        <Route path="player" element={<Player />}>
          <Route path="live/:gameId" element={<PlayerLivePage />} />
        </Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
