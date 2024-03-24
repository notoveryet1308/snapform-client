import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./modules/Admin";
import Player from "./modules/Player";
import PlayerLivePage from "./modules/Player/live";
import LiveGame from "./modules/Admin/LiveGame";
import { ChoiceButtonEdit, ChoiceButton } from "./components/UI/ChoiceButton";
import FormBuilder from "./modules/Admin/FormBuilder";
import Dashboard from "./modules/Admin/Dashboard";
import QuizBuilder from "./modules/Admin/FormBuilder/QuizBuilder";
import DynamicFormBuilder from "./modules/Admin/FormBuilder/DynamicFormBuilder";
import MultiSelectView from "./components/QuestionType/MultiSelect/view";
import SingleSelectView from "./components/QuestionType/SingleSelect/view";
import YesNoSelectView from "./components/QuestionType/YesNoChoice/view";
import { ALL_QUESTION_TYPES } from "./type";

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
        selected={false}
      />
      <MultiSelectView
        getSelectedOption={() => {}}
        id="sample-test"
        options={[
          { label: "const", isCorrectChoice: true, order: "A" },
          { label: "var", isCorrectChoice: true, order: "B" },
          { label: "let", isCorrectChoice: true, order: "C" },
          { label: "final", isCorrectChoice: false, order: "D" },
        ]}
        timeLimit={30}
        point={2000}
        questionType={ALL_QUESTION_TYPES.MULTI_SELECT}
        title="What are correct key words for declaring variables in Javascript"
        description="In JavaScript, variables can be declared using different keywords such as var, let, and const. Each keyword has its own rules and behaviors for variable declaration and assignment. This question asks you to identify the invalid way of declaring a variable among the given options. Understanding the correct ways to declare variables is essential for writing clean and efficient JavaScript code"
      />
      <SingleSelectView
        getSelectedOption={() => {}}
        id="sample-test"
        options={[
          { label: "const", isCorrectChoice: false, order: "A" },
          { label: "var", isCorrectChoice: false, order: "B" },
          { label: "let", isCorrectChoice: true, order: "C" },
          { label: "final", isCorrectChoice: false, order: "D" },
        ]}
        timeLimit={30}
        point={2000}
        questionType={ALL_QUESTION_TYPES.SINGLE_SELECT}
        title="What are correct key words for declaring variables in Javascript"
        description="In JavaScript, variables can be declared using different keywords such as var, let, and const. Each keyword has its own rules and behaviors for variable declaration and assignment. This question asks you to identify the invalid way of declaring a variable among the given options. Understanding the correct ways to declare variables is essential for writing clean and efficient JavaScript code"
      />
      <YesNoSelectView
        getSelectedOption={() => {}}
        id="sample-test"
        options={[
          { label: "Yes", isCorrectChoice: true, order: "A" },
          { label: "No", isCorrectChoice: false, order: "B" },
        ]}
        timeLimit={30}
        point={2000}
        questionType={ALL_QUESTION_TYPES.YES_NO_SELECT}
        title="What are correct key words for declaring variables in Javascript"
        description="In JavaScript, variables can be declared using different keywords such as var, let, and const. Each keyword has its own rules and behaviors for variable declaration and assignment. This question asks you to identify the invalid way of declaring a variable among the given options. Understanding the correct ways to declare variables is essential for writing clean and efficient JavaScript code"
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
          <Route path="build" element={<FormBuilder />}>
            <Route path="live-quiz" element={<QuizBuilder />} />
            <Route path="dynamic-form" element={<DynamicFormBuilder />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />}></Route>

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
