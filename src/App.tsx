import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./modules/Admin";
import Player from "./modules/Player";
import PlayerLivePage from "./modules/Player/live";
import LiveGame from "./modules/Admin/LiveGame";
import { ChoiceButtonEdit, ChoiceButton } from "./components/UI/ChoiceButton";

const HomePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <ChoiceButtonEdit
        getOptionDetail={(data) => {
          console.log({ data });
        }}
        placeholder="Test choice edit btn"
      />
      <ChoiceButton
        label="Hello people!"
        order="A"
        isCorrectChoice
        onChoiceClick={(value) => {
          console.log({ value });
        }}
        isSelectionDisabled
      />
    </div>
  );
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
